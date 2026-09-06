import "server-only";

import { isAllowedAuthHostname, requestHostname } from "./auth-hosts";
import { emailDeliveryConfigured } from "./email";

export function turnstileSiteKey() {
  return (process.env.TURNSTILE_SITE_KEY || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "").trim();
}

export function turnstileRegistrationConfigured() {
  return Boolean(turnstileSiteKey() && process.env.TURNSTILE_SECRET_KEY?.trim());
}

export function accountCapabilities(request?: Request) {
  const hostAllowed = !request || isAllowedAuthHostname(requestHostname(request));
  const emailVerificationAvailable = hostAllowed && emailDeliveryConfigured();
  // Registration and password recovery share the same delivery plus human
  // verification requirements; both must fail closed on a partial setup.
  const actionAvailable = emailVerificationAvailable && turnstileRegistrationConfigured();
  return {
    emailVerificationAvailable,
    registrationAvailable: actionAvailable,
    passwordResetAvailable: actionAvailable,
    hostAllowed,
  };
}

export function turnstileAvailableForRequest(request?: Request) {
  return (!request || isAllowedAuthHostname(requestHostname(request))) && turnstileRegistrationConfigured();
}
