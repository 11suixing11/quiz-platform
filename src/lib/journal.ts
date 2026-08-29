export type JournalContentLanguage = "zh" | "en" | "bilingual";
export type JournalStatus = "draft" | "processing" | "published" | "hidden" | "unpublished" | "deleted";
export type JournalAssetStatus = "queued" | "processing" | "ready" | "failed";
export type JournalAccountStatus = "normal" | "upload_blocked" | "read_only" | "suspended" | "banned";

export interface JournalImageVariant {
  src: string;
  width: number;
  height: number;
}

export interface JournalImage {
  id: string;
  position: number;
  caption: string;
  alt: string;
  decorative: boolean;
  status: JournalAssetStatus;
  width: number;
  height: number;
  variants: {
    thumb?: JournalImageVariant;
    medium?: JournalImageVariant;
    large?: JournalImageVariant;
  };
  error?: string;
}

export interface JournalAuthor {
  displayName: string;
  avatar?: string;
}

export interface JournalComment {
  id: string;
  entryId: string;
  parentId: string | null;
  body: string;
  createdAt: number;
  author: JournalAuthor;
  canDelete: boolean;
}

export interface JournalEntry {
  id: string;
  ownerId?: string;
  title: string;
  body: string;
  contentLanguage: JournalContentLanguage;
  status: JournalStatus;
  allowComments: boolean;
  images: JournalImage[];
  author?: JournalAuthor;
  isOwner: boolean;
  hasUnpublishedChanges: boolean;
  revision: number;
  publicRevision: number;
  createdAt: number;
  updatedAt: number;
  publishedAt?: number;
  reactionCount: number;
  commentCount: number;
  reacted: boolean;
  comments: JournalComment[];
}

export interface JournalSummary {
  id: string;
  title: string;
  excerpt: string;
  contentLanguage: JournalContentLanguage;
  status: JournalStatus;
  cover?: JournalImage;
  imageCount: number;
  allowComments: boolean;
  hasUnpublishedChanges: boolean;
  publicRevision: number;
  createdAt: number;
  updatedAt: number;
  publishedAt?: number;
}

export interface JournalViewer {
  emailVerified: boolean;
  accountStatus: JournalAccountStatus;
  uploadRemaining: number;
  publishRemaining: number;
  mediaBytesUsed: number;
  mediaBytesLimit: number;
}

export interface JournalLibraryResponse {
  entries: JournalSummary[];
  viewer: JournalViewer;
}

export interface JournalDraftInput {
  title: string;
  body: string;
  contentLanguage: JournalContentLanguage;
  allowComments: boolean;
  images: Array<Pick<JournalImage, "id" | "position" | "caption" | "alt" | "decorative">>;
  baseRevision: number;
}

export interface JournalSaveReceipt {
  revision: number;
  updatedAt: number;
  hasUnpublishedChanges: boolean;
}

export interface JournalUploadSession {
  id: string;
  expiresAt: number;
}

export interface JournalUploadOptions {
  userId: string;
  entryId: string;
  uploadSessionId: string;
  file: File;
  position?: number;
  onProgress?: (progress: number) => void;
}

export type JournalReportReason = "illegal" | "minor_sexual" | "nonconsensual_intimate" | "privacy" | "explicit_harm" | "spam" | "abuse" | "sexual" | "copyright" | "other";

export class JournalApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "JournalApiError";
  }
}

type ErrorPayload = { error?: string; message?: string; code?: string; details?: unknown };

function expectedUserHeaders(userId?: string, json = false) {
  return {
    Accept: "application/json",
    ...(userId ? { "X-Expected-User-Id": userId } : {}),
    ...(json ? { "Content-Type": "application/json" } : {}),
  };
}

async function responseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => null) as (T & ErrorPayload) | null;
  if (!response.ok) {
    const message = payload && (payload.error || payload.message);
    throw new JournalApiError(typeof message === "string" ? message : "请求失败", response.status, payload?.code, payload?.details);
  }
  return payload as T;
}

function xhrJson<T>(request: XMLHttpRequest): T {
  const payload = (() => {
    try { return JSON.parse(request.responseText) as T & ErrorPayload; }
    catch { return null; }
  })();
  if (request.status < 200 || request.status >= 300) {
    const message = payload && (payload.error || payload.message);
    throw new JournalApiError(typeof message === "string" ? message : "上传失败", request.status, payload?.code, payload?.details);
  }
  return payload as T;
}

function encodeId(value: string) {
  return encodeURIComponent(value);
}

type UnknownRecord = Record<string, unknown>;

function record(value: unknown): UnknownRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? value as UnknownRecord : {};
}

function number(value: unknown, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function string(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function boolean(value: unknown, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

function variantFrom(value: unknown, requestedWidth: number, originalWidth: number, originalHeight: number): JournalImageVariant | undefined {
  if (typeof value === "string" && value) {
    const width = originalWidth > 0 ? Math.min(requestedWidth, originalWidth) : requestedWidth;
    const height = originalWidth > 0 && originalHeight > 0 ? Math.max(1, Math.round((width / originalWidth) * originalHeight)) : width;
    return { src: value, width, height };
  }
  const item = record(value);
  const src = string(item.src);
  return src ? { src, width: number(item.width, requestedWidth), height: number(item.height, requestedWidth) } : undefined;
}

function normalizeImage(value: unknown, fallbackPosition = 0): JournalImage {
  const item = record(value);
  const variants = record(item.variants);
  const width = number(item.width);
  const height = number(item.height);
  return {
    id: string(item.id),
    position: number(item.position, fallbackPosition),
    caption: string(item.caption),
    alt: string(item.alt, string(item.altText)),
    decorative: boolean(item.decorative),
    status: (string(item.status, "processing") as JournalAssetStatus),
    width,
    height,
    variants: {
      thumb: variantFrom(variants.thumb ?? variants["320"], 320, width, height),
      medium: variantFrom(variants.medium ?? variants["960"], 960, width, height),
      large: variantFrom(variants.large ?? variants["1600"], 1600, width, height),
    },
    error: string(item.error) || undefined,
  };
}

function normalizeComment(value: unknown): JournalComment {
  const item = record(value);
  const author = record(item.author);
  return {
    id: string(item.id),
    entryId: string(item.entryId),
    parentId: typeof item.parentId === "string" ? item.parentId : null,
    body: string(item.body),
    createdAt: number(item.createdAt),
    author: { displayName: string(author.displayName, "—"), avatar: string(author.avatar) || undefined },
    canDelete: boolean(item.canDelete),
  };
}

function normalizeEntry(value: unknown): JournalEntry {
  const item = record(value);
  const author = record(item.author);
  const images = Array.isArray(item.images) ? item.images.map(normalizeImage) : [];
  const publishedAt = number(item.publishedAt) || undefined;
  const updatedAt = number(item.updatedAt, publishedAt ?? Date.now());
  const status = string(item.status, "draft") as JournalStatus;
  return {
    id: string(item.id),
    ownerId: string(item.ownerId) || undefined,
    title: string(item.title),
    body: string(item.body),
    contentLanguage: string(item.contentLanguage, "zh") as JournalContentLanguage,
    status,
    allowComments: boolean(item.allowComments, true),
    images,
    author: string(author.displayName) ? { displayName: string(author.displayName), avatar: string(author.avatar) || undefined } : undefined,
    isOwner: boolean(item.isOwner),
    hasUnpublishedChanges: boolean(item.hasUnpublishedChanges),
    revision: number(item.revision, updatedAt),
    publicRevision: number(item.publicRevision, publishedAt ? 1 : 0),
    createdAt: number(item.createdAt, publishedAt ?? updatedAt),
    updatedAt,
    publishedAt,
    reactionCount: number(item.reactionCount),
    commentCount: number(item.commentCount),
    reacted: boolean(item.reacted),
    comments: Array.isArray(item.comments) ? item.comments.map(normalizeComment) : [],
  };
}

function normalizeSummary(value: unknown): JournalSummary {
  const item = record(value);
  const entry = normalizeEntry(item);
  const coverValue = item.cover ?? entry.images[0];
  return {
    id: entry.id,
    title: entry.title,
    excerpt: string(item.excerpt, journalExcerpt(entry.body, 180)),
    contentLanguage: entry.contentLanguage,
    status: entry.status,
    cover: coverValue ? normalizeImage(coverValue) : undefined,
    imageCount: number(item.imageCount, entry.images.length),
    allowComments: entry.allowComments,
    hasUnpublishedChanges: entry.hasUnpublishedChanges,
    publicRevision: entry.publicRevision,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    publishedAt: entry.publishedAt,
  };
}

function normalizeViewer(value: unknown): JournalViewer {
  const item = record(value);
  const quota = record(item.quota);
  const rawStatus = string(item.accountStatus, "normal");
  const accountStatus: JournalAccountStatus = rawStatus === "no_upload" ? "upload_blocked" : rawStatus as JournalAccountStatus;
  const mediaBytesLimit = 250 * 1024 * 1024;
  const mediaBytesUsed = number(item.mediaBytesUsed, number(quota.totalBytes, Math.max(0, mediaBytesLimit - number(quota.bytesRemaining, mediaBytesLimit))));
  return {
    emailVerified: boolean(item.emailVerified),
    accountStatus,
    uploadRemaining: number(item.uploadRemaining, number(quota.uploadsRemaining)),
    publishRemaining: number(item.publishRemaining, number(quota.publishesRemaining)),
    mediaBytesUsed,
    mediaBytesLimit: number(item.mediaBytesLimit, mediaBytesLimit),
  };
}

export function journalImageSource(image: JournalImage, preferred: "thumb" | "medium" | "large" = "large") {
  return image.variants[preferred] ?? image.variants.large ?? image.variants.medium ?? image.variants.thumb;
}

export function journalExcerpt(body: string, limit = 150) {
  const normalized = body.replace(/\s+/gu, " ").trim();
  return Array.from(normalized).slice(0, limit).join("");
}

export async function getJournalLibrary(userId: string) {
  const payload = await responseJson<{ entries?: unknown[]; viewer?: unknown }>(await fetch("/api/journal", {
    credentials: "include",
    cache: "no-store",
    headers: expectedUserHeaders(userId),
  }));
  return { entries: (payload.entries ?? []).map(normalizeSummary), viewer: normalizeViewer(payload.viewer) };
}

export async function createJournalDraft(userId: string, input: { contentLanguage: JournalContentLanguage; allowComments?: boolean }) {
  const payload = await responseJson<{ entry: unknown }>(await fetch("/api/journal", {
    method: "POST",
    credentials: "include",
    headers: expectedUserHeaders(userId, true),
    body: JSON.stringify({ contentLanguage: input.contentLanguage, allowComments: input.allowComments ?? true }),
  }));
  return { entry: normalizeEntry(payload.entry) };
}

export async function getJournalEntry(id: string, userId?: string, view?: "draft") {
  const query = view ? `?view=${view}` : "";
  const payload = await responseJson<{ entry: unknown }>(await fetch(`/api/journal/${encodeId(id)}${query}`, {
    credentials: "include",
    cache: "no-store",
    headers: expectedUserHeaders(userId),
  }));
  return { entry: normalizeEntry(payload.entry) };
}

export async function saveJournalDraft(userId: string, id: string, input: JournalDraftInput, signal?: AbortSignal) {
  const body = {
    ...input,
    images: input.images.map((image) => ({ ...image, assetId: image.id, altText: image.alt })),
  };
  const payload = await responseJson<JournalSaveReceipt & { entry?: unknown }>(await fetch(`/api/journal/${encodeId(id)}`, {
    method: "PATCH",
    credentials: "include",
    headers: expectedUserHeaders(userId, true),
    body: JSON.stringify(body),
    signal,
  }));
  if (payload.entry) {
    const entry = normalizeEntry(payload.entry);
    return { revision: entry.revision, updatedAt: entry.updatedAt, hasUnpublishedChanges: entry.hasUnpublishedChanges };
  }
  return payload;
}

export async function createJournalUploadSession(userId: string, id: string, turnstileToken?: string) {
  const payload = await responseJson<{ upload?: JournalUploadSession; uploadId?: string; expiresAt?: number }>(await fetch(`/api/journal/${encodeId(id)}/uploads`, {
    method: "POST",
    credentials: "include",
    headers: expectedUserHeaders(userId, true),
    body: JSON.stringify({ turnstileToken }),
  }));
  return { upload: payload.upload ?? { id: payload.uploadId ?? "", expiresAt: payload.expiresAt ?? 0 } };
}

function uploadJournalFile(method: "POST" | "PUT", url: string, options: JournalUploadOptions) {
  return new Promise<{ image: JournalImage }>((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.responseType = "text";
    request.withCredentials = true;
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("X-Expected-User-Id", options.userId);
    request.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) options.onProgress?.(Math.round((event.loaded / event.total) * 100));
    });
    request.addEventListener("load", () => {
      try {
        const payload = xhrJson<{ image?: unknown; entry?: unknown }>(request);
        if (payload.image) {
          resolve({ image: normalizeImage(payload.image, options.position ?? 0) });
          return;
        }
        const entry = payload.entry ? normalizeEntry(payload.entry) : null;
        const image = entry?.images.find((item) => item.position === options.position) ?? entry?.images.at(-1);
        if (!image) throw new JournalApiError("图片响应无效", 500, "INVALID_IMAGE_RESPONSE");
        resolve({ image });
      }
      catch (error) { reject(error); }
    });
    request.addEventListener("error", () => reject(new JournalApiError("网络中断，图片尚未上传", 0, "NETWORK_ERROR")));
    request.addEventListener("abort", () => reject(new JournalApiError("上传已取消", 0, "UPLOAD_ABORTED")));
    const form = new FormData();
    form.set("file", options.file);
    if (typeof options.position === "number") form.set("position", String(options.position));
    form.set("uploadId", options.uploadSessionId);
    form.set("altText", "");
    form.set("decorative", "true");
    request.send(form);
  });
}

export function uploadJournalAsset(options: JournalUploadOptions) {
  return uploadJournalFile("POST", `/api/journal/${encodeId(options.entryId)}/uploads/${encodeId(options.uploadSessionId)}/assets`, options);
}

export function replaceJournalAsset(assetId: string, options: JournalUploadOptions) {
  return uploadJournalFile("PUT", `/api/journal/${encodeId(options.entryId)}/assets/${encodeId(assetId)}`, options);
}

export async function deleteJournalAsset(userId: string, entryId: string, assetId: string) {
  const payload = await responseJson<{ ok?: true; entry?: unknown }>(await fetch(`/api/journal/${encodeId(entryId)}/assets/${encodeId(assetId)}`, {
    method: "DELETE",
    credentials: "include",
    headers: expectedUserHeaders(userId),
  }));
  return { ok: true as const, entry: payload.entry ? normalizeEntry(payload.entry) : undefined };
}

export async function reorderJournalAssets(userId: string, entryId: string, imageIds: string[]) {
  const payload = await responseJson<{ revision?: number; entry?: unknown }>(await fetch(`/api/journal/${encodeId(entryId)}/assets/order`, {
    method: "PUT",
    credentials: "include",
    headers: expectedUserHeaders(userId, true),
    body: JSON.stringify({ imageIds, assetIds: imageIds }),
  }));
  const entry = payload.entry ? normalizeEntry(payload.entry) : undefined;
  return { revision: payload.revision ?? entry?.revision ?? Date.now(), entry };
}

export async function publishJournalEntry(userId: string, id: string) {
  const payload = await responseJson<{ entry: unknown }>(await fetch(`/api/journal/${encodeId(id)}/publish`, {
    method: "POST",
    credentials: "include",
    headers: expectedUserHeaders(userId),
  }));
  return { entry: normalizeEntry(payload.entry) };
}

export async function updatePublishedJournalEntry(userId: string, id: string) {
  const payload = await responseJson<{ entry: unknown }>(await fetch(`/api/journal/${encodeId(id)}/publish`, {
    method: "PUT",
    credentials: "include",
    headers: expectedUserHeaders(userId),
  }));
  return { entry: normalizeEntry(payload.entry) };
}

export async function unpublishJournalEntry(userId: string, id: string) {
  const payload = await responseJson<{ entry: unknown }>(await fetch(`/api/journal/${encodeId(id)}/unpublish`, {
    method: "POST",
    credentials: "include",
    headers: expectedUserHeaders(userId),
  }));
  return { entry: normalizeEntry(payload.entry) };
}

export async function deleteJournalEntry(userId: string, id: string) {
  return responseJson<{ ok: true }>(await fetch(`/api/journal/${encodeId(id)}`, {
    method: "DELETE",
    credentials: "include",
    headers: expectedUserHeaders(userId),
  }));
}

export async function setJournalReaction(userId: string, entryId: string, active: boolean) {
  return responseJson<{ active?: boolean; ok?: true }>(await fetch(`/api/journal/${encodeId(entryId)}/reaction`, {
    method: active ? "PUT" : "DELETE",
    credentials: "include",
    headers: expectedUserHeaders(userId, active),
    body: active ? JSON.stringify({ active: true }) : undefined,
  }));
}

export async function createJournalComment(userId: string, entryId: string, body: string, parentId?: string) {
  return responseJson<{ id: string }>(await fetch(`/api/journal/${encodeId(entryId)}/comments`, {
    method: "POST",
    credentials: "include",
    headers: expectedUserHeaders(userId, true),
    body: JSON.stringify({ body, parentId }),
  }));
}

export async function deleteJournalComment(userId: string, entryId: string, commentId: string) {
  return responseJson<{ ok: true }>(await fetch(`/api/journal/${encodeId(entryId)}/comments/${encodeId(commentId)}`, {
    method: "DELETE",
    credentials: "include",
    headers: expectedUserHeaders(userId),
  }));
}

export async function reportJournalContent(userId: string, input: { entryId?: string; commentId?: string; reason: JournalReportReason; details: string }) {
  return responseJson<{ hidden: boolean; duplicate: boolean }>(await fetch("/api/journal/reports", {
    method: "POST",
    credentials: "include",
    headers: expectedUserHeaders(userId, true),
    body: JSON.stringify(input),
  }));
}
