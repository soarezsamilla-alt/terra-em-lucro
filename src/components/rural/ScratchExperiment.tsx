import { lazy, Suspense, useEffect, useState } from "react";
import {
  CHECKOUT_COMPLETO_URL,
  CHECKOUT_UPSELL_RECUSA_URL,
  CHECKOUT_UPSELL_URL,
} from "@/lib/rural-config";
import {
  DISCOUNTED_COMPLETE_CHECKOUT_URL,
  isDiscountCheckoutConfigured,
  scratchPopupEnabled,
  SCRATCH_PREVIEW_QUERY,
  scrollTriggerPercentage,
} from "@/lib/scratch-config";
import {
  getOrAssignScratchVariant,
  interactionIsRecent,
  saveScratchInteraction,
  trackScratchEvent,
  type ScratchVariant,
} from "@/lib/scratch-experiment";

const ScratchPopup = lazy(() =>
  import("@/components/rural/ScratchPopup").then((module) => ({ default: module.ScratchPopup })),
);

const CHECKOUT_URLS = new Set([
  CHECKOUT_COMPLETO_URL,
  CHECKOUT_UPSELL_URL,
  CHECKOUT_UPSELL_RECUSA_URL,
  ...(isDiscountCheckoutConfigured ? [DISCOUNTED_COMPLETE_CHECKOUT_URL] : []),
]);

export function ScratchExperiment() {
  const [variant, setVariant] = useState<ScratchVariant | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!scratchPopupEnabled || window.location.pathname !== "/") return;

    const previewForced =
      new URLSearchParams(window.location.search).get(SCRATCH_PREVIEW_QUERY) === "1";
    if (!isDiscountCheckoutConfigured && !previewForced) return;
    const assignedVariant = previewForced ? "scratch_discount" : getOrAssignScratchVariant();
    setVariant(assignedVariant);
    trackScratchEvent("rp_scratch_eligible", assignedVariant);
    if (assignedVariant !== "scratch_discount" || (!previewForced && interactionIsRecent())) return;

    let dismissedByCheckout = false;
    let shown = false;
    const show = () => {
      if (shown || dismissedByCheckout) return;
      shown = true;
      setOpen(true);
      window.removeEventListener("scroll", handleScroll);
    };
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      if ((window.scrollY / scrollableHeight) * 100 >= scrollTriggerPercentage) show();
    };
    const handleCheckoutClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || !CHECKOUT_URLS.has(link.href)) return;
      dismissedByCheckout = true;
      setOpen(false);
      saveScratchInteraction();
      window.removeEventListener("scroll", handleScroll);
    };

    const previewDelayId = previewForced ? window.setTimeout(show, 800) : undefined;
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleCheckoutClick, true);
    handleScroll();

    return () => {
      if (previewDelayId !== undefined) window.clearTimeout(previewDelayId);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleCheckoutClick, true);
    };
  }, []);

  if (!open || !variant) return null;

  return (
    <Suspense fallback={null}>
      <ScratchPopup open={open} variant={variant} onDismiss={() => setOpen(false)} />
    </Suspense>
  );
}
