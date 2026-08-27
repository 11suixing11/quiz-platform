export interface SharePayload {
  title: string;
  text: string;
  url: string;
}

export interface ShareTarget {
  clipboard?: { writeText(value: string): Promise<void> };
  share?: (payload: SharePayload) => Promise<void>;
}

export type ShareOutcome = "copied" | "shared" | "cancelled";

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}

/** Prefer the action named by the button, then fall back to the native share sheet. */
export async function copyOrShare(target: ShareTarget, payload: SharePayload): Promise<ShareOutcome> {
  const value = `${payload.text} ${payload.url}`;
  let clipboardError: unknown;

  if (target.clipboard?.writeText) {
    try {
      await target.clipboard.writeText(value);
      return "copied";
    } catch (error) {
      clipboardError = error;
    }
  }

  if (target.share) {
    try {
      await target.share(payload);
      return "shared";
    } catch (error) {
      if (isAbortError(error)) return "cancelled";
      throw error;
    }
  }

  throw clipboardError instanceof Error ? clipboardError : new Error("SHARE_UNAVAILABLE");
}
