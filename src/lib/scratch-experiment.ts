import {
  experimentTrafficPercentage,
  repeatAfterDays,
  SCRATCH_EXPERIMENT_NAME,
  SCRATCH_INTERACTION_KEY,
  SCRATCH_VARIANT_KEY,
} from "@/lib/scratch-config";

export type ScratchVariant = "control" | "scratch_discount";
export type ScratchEventName =
  | "rp_scratch_eligible"
  | "rp_scratch_shown"
  | "rp_scratch_started"
  | "rp_scratch_revealed"
  | "rp_scratch_cta_clicked"
  | "rp_scratch_closed";

interface StoredVariant {
  readonly variant: ScratchVariant;
  readonly assignedAt: number;
}

interface ScratchWindow extends Window {
  dataLayer?: Array<Record<string, unknown>>;
  fbq?: (command: "trackCustom", eventName: string, parameters: Record<string, unknown>) => void;
}

const DAY_MS = 24 * 60 * 60 * 1000;

function readStoredVariant(now: number): StoredVariant | null {
  try {
    const raw = window.localStorage.getItem(SCRATCH_VARIANT_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<StoredVariant>;
    if (
      (value.variant === "control" || value.variant === "scratch_discount") &&
      typeof value.assignedAt === "number" &&
      now - value.assignedAt < repeatAfterDays * DAY_MS
    ) {
      if (experimentTrafficPercentage === 100 && value.variant === "control") return null;
      return { variant: value.variant, assignedAt: value.assignedAt };
    }
  } catch {
    return null;
  }
  return null;
}

export function getOrAssignScratchVariant(now = Date.now()): ScratchVariant {
  const stored = readStoredVariant(now);
  if (stored) return stored.variant;

  const variant: ScratchVariant =
    Math.random() * 100 < experimentTrafficPercentage ? "scratch_discount" : "control";
  try {
    window.localStorage.setItem(SCRATCH_VARIANT_KEY, JSON.stringify({ variant, assignedAt: now }));
  } catch {
    // Storage may be unavailable in privacy mode; the page must remain usable.
  }
  return variant;
}

export function interactionIsRecent(now = Date.now()): boolean {
  try {
    const raw = window.localStorage.getItem(SCRATCH_INTERACTION_KEY);
    if (!raw) return false;
    const lastInteraction = Number(raw);
    return Number.isFinite(lastInteraction) && now - lastInteraction < repeatAfterDays * DAY_MS;
  } catch {
    return false;
  }
}

export function saveScratchInteraction(now = Date.now()): void {
  try {
    window.localStorage.setItem(SCRATCH_INTERACTION_KEY, String(now));
  } catch {
    // Frequency control gracefully degrades when storage is unavailable.
  }
}

export function trackScratchEvent(event: ScratchEventName, variant: ScratchVariant): void {
  const payload = {
    experiment_name: SCRATCH_EXPERIMENT_NAME,
    variant,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };
  try {
    const browserWindow = window as ScratchWindow;
    browserWindow.dataLayer?.push({ event, ...payload });
    browserWindow.fbq?.("trackCustom", event, payload);
  } catch {
    // Analytics must never interrupt the visitor experience.
  }
}
