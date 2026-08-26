import { toNextJsHandler } from "better-auth/next-js";
import { auth, ensureAuthReady } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const handler = toNextJsHandler(auth);

/** Better Auth does not migrate automatically; gate every endpoint on setup. */
async function ready(request: Request, method: keyof typeof handler) {
  await ensureAuthReady();
  return handler[method](request);
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
