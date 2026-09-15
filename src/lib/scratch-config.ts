export const scratchPopupEnabled = true;
export const experimentTrafficPercentage = 50;
export const popupDelaySeconds = 12;
export const scrollTriggerPercentage = 35;
export const repeatAfterDays = 7;
export const originalPrice = 29.9;
export const discountedPrice = 24.9;
export const discountAmount = 5;

export const DISCOUNTED_COMPLETE_CHECKOUT_URL = "COLE_AQUI_O_LINK_REAL_DO_CHECKOUT_COM_DESCONTO";

export const SCRATCH_EXPERIMENT_NAME = "rural_planner_scratch_v1";
export const SCRATCH_VARIANT_KEY = "rp_scratch_variant";
export const SCRATCH_INTERACTION_KEY = "rp_scratch_last_interaction";
export const SCRATCH_PREVIEW_QUERY = "rp_scratch_preview";

export const isDiscountCheckoutConfigured =
  DISCOUNTED_COMPLETE_CHECKOUT_URL.startsWith("https://") &&
  !DISCOUNTED_COMPLETE_CHECKOUT_URL.includes("COLE_AQUI");
