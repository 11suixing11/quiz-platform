import "server-only";

import { emailDeliveryConfigured } from "./email";

export function turnstileSiteKey() {
  return (process.env.TURNSTILE_SITE_KEY || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "").trim();
}

export function turnstileRegistrationConfigured() {
  return Boolean(turnstileSiteKey() && process.env.TURNSTILE_SECRET_KEY?.trim());
}

export function accountCapabilities() {
  const emailVerificationAvailable = emailDeliveryConfigured();
  return {
    emailVerificationAvailable,
    registrationAvailable: emailVerificationAvailable && turnstileRegistrationConfigured(),
  };
}
