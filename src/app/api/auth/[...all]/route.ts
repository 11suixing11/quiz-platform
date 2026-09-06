import { toNextJsHandler } from "better-auth/next-js";
import { auth, ensureAuthReady } from "@/lib/auth";
import { accountCapabilities } from "@/lib/server/account-capabilities";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const handler = toNextJsHandler(auth);
const EMAIL_DELIVERY_FAILURE = "VERIFICATION_EMAIL_DELIVERY_FAILED";
const RESET_DELIVERY_FAILURE = "RESET_PASSWORD_DELIVERY_FAILED";

function authPath(request: Request) {
  return new URL(request.url).pathname;
}

function unavailable(error: string, code: string) {
  return Response.json({ error, code }, {
    status: 503,
    headers: { "Cache-Control": "no-store" },
  });
}

function isEmailDeliveryFailure(error: unknown) {
  if (!(error instanceof Error)) return false;
  return error.message === EMAIL_DELIVERY_FAILURE
    || (error as Error & { code?: unknown }).code === EMAIL_DELIVERY_FAILURE;
}

function isResetDeliveryFailure(error: unknown) {
  if (!(error instanceof Error)) return false;
  return error.message === RESET_DELIVERY_FAILURE
    || (error as Error & { code?: unknown }).code === RESET_DELIVERY_FAILURE;
}

/** Better Auth does not migrate automatically; gate every endpoint on setup. */
async function ready(request: Request, method: keyof typeof handler) {
  const path = authPath(request);
  const isEmailRequestPath = method === "POST"
    && (path === "/api/auth/sign-up/email" || path === "/api/auth/send-verification-email" || path === "/api/auth/request-password-reset");
  if (isEmailRequestPath) {
    const capabilities = accountCapabilities(request);
    if (path === "/api/auth/sign-up/email" && !capabilities.registrationAvailable) {
      return unavailable("注册服务暂未开放", "REGISTRATION_UNAVAILABLE");
    }
    if (path === "/api/auth/send-verification-email" && !capabilities.emailVerificationAvailable) {
      return unavailable("验证邮件服务暂不可用", "EMAIL_VERIFICATION_UNAVAILABLE");
    }
    if (path === "/api/auth/request-password-reset" && !capabilities.passwordResetAvailable) {
      return unavailable("找回密码服务暂不可用", "PASSWORD_RESET_UNAVAILABLE");
    }
  }

  await ensureAuthReady();
  // /api/auth/reset-password stays ungated: possessing the single-use token
  // is the credential, and no email is sent from that endpoint.
  const isPasswordResetRequest = method === "POST" && path === "/api/auth/request-password-reset";
  try {
    const response = await handler[method](request);
    if (method === "POST" && path === "/api/auth/send-verification-email" && response.status >= 500) {
      return unavailable("验证邮件发送失败，请稍后重试", EMAIL_DELIVERY_FAILURE);
    }
    if (isPasswordResetRequest && response.status >= 500) {
      return unavailable("重置邮件发送失败，请稍后重试", RESET_DELIVERY_FAILURE);
    }
    return response;
  } catch (error) {
    if (method === "POST" && path === "/api/auth/send-verification-email" && isEmailDeliveryFailure(error)) {
      return unavailable("验证邮件发送失败，请稍后重试", EMAIL_DELIVERY_FAILURE);
    }
    if (isPasswordResetRequest && isResetDeliveryFailure(error)) {
      return unavailable("重置邮件发送失败，请稍后重试", RESET_DELIVERY_FAILURE);
    }
    throw error;
  }
}

export async function GET(request: Request) {
  return ready(request, "GET");
}

export async function POST(request: Request) {
  return ready(request, "POST");
}

export async function PATCH(request: Request) {
  return ready(request, "PATCH");
}

export async function PUT(request: Request) {
  return ready(request, "PUT");
}

export async function DELETE(request: Request) {
  return ready(request, "DELETE");
}
