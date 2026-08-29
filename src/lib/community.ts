"use client";

import type { CommunityPost } from "@/lib/server/community";

export type { CommunityPost, CommunityComment } from "@/lib/server/community";

export class CommunityApiError extends Error {
  constructor(message: string, public readonly status: number, public readonly code?: string) {
    super(message);
    this.name = "CommunityApiError";
  }
}

async function responseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => null) as (T & { error?: string; code?: string }) | null;
  if (!response.ok) throw new CommunityApiError(payload?.error || "请求失败", response.status, payload?.code);
  return payload as T;
}

function headers(userId?: string, json = false) {
  return { Accept: "application/json", ...(userId ? { "X-Expected-User-Id": userId } : {}), ...(json ? { "Content-Type": "application/json" } : {}) };
}

export async function getCommunityPosts(sort: "latest" | "resonant") {
  return responseJson<{ posts: CommunityPost[] }>(await fetch(`/api/community/posts?sort=${sort}`, { cache: "no-store", credentials: "include", headers: headers() }));
}

export async function publishCommunityPost(userId: string, input: { attemptId: string; reflection: string; showResultType: boolean; showDimensions: boolean; showAvatar: boolean; allowComments: boolean }) {
  return responseJson<{ id: string }>(await fetch("/api/community/posts", { method: "POST", credentials: "include", headers: headers(userId, true), body: JSON.stringify(input) }));
}

export async function deleteCommunityPost(userId: string, postId: string) {
  return responseJson<{ ok: true }>(await fetch(`/api/community/posts/${postId}`, { method: "DELETE", credentials: "include", headers: headers(userId) }));
}

export async function setCommunityReaction(userId: string, postId: string, active: boolean) {
  return responseJson<{ ok: true }>(await fetch(`/api/community/posts/${postId}/reaction`, { method: active ? "POST" : "DELETE", credentials: "include", headers: headers(userId) }));
}

export async function addCommunityComment(userId: string, postId: string, body: string, parentId?: string) {
  return responseJson<{ id: string }>(await fetch(`/api/community/posts/${postId}/comments`, { method: "POST", credentials: "include", headers: headers(userId, true), body: JSON.stringify({ body, parentId }) }));
}

export async function deleteCommunityComment(userId: string, commentId: string) {
  return responseJson<{ ok: true }>(await fetch(`/api/community/comments/${commentId}`, { method: "DELETE", credentials: "include", headers: headers(userId) }));
}

export async function reportCommunityContent(userId: string, input: { postId?: string; commentId?: string; reason: string }) {
  return responseJson<{ ok: true; hidden?: boolean; duplicate?: boolean }>(await fetch("/api/community/reports", { method: "POST", credentials: "include", headers: headers(userId, true), body: JSON.stringify(input) }));
}
