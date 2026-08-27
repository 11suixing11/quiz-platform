"use client";

import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import NextImage from "next/image";
import { Camera, Check, Pencil, Plus, Trash2, X } from "lucide-react";
import { useAccount } from "@/components/account-provider";
import type { LocalProfile } from "@/lib/local-profile";
import { cn } from "@/lib/utils";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

function initials(name: string) {
  return Array.from(name.trim()).slice(0, 2).join("").toUpperCase() || "ME";
}

function resizeAvatar(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read"));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("image"));
      image.onload = () => {
        const size = 320;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        if (!context) return reject(new Error("canvas"));
        const crop = Math.min(image.naturalWidth, image.naturalHeight);
        const x = (image.naturalWidth - crop) / 2;
        const y = (image.naturalHeight - crop) / 2;
        context.drawImage(image, x, y, crop, crop, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

export function ProfileEditor({ userId, displayName, email, zh, syncMode }: { userId: string; displayName: string; email: string; zh: boolean; syncMode: "merge" | null }) {
  const { user, profile, saveProfile } = useAccount();
  const currentProfile = profile ?? { avatar: "", bio: "", tags: [], updatedAt: 0 };
  const [draft, setDraft] = useState<LocalProfile>(currentProfile);
  const [tag, setTag] = useState("");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const editingRef = useRef(false);
  const operationRef = useRef(0);

  useEffect(() => {
    if (!profile || editingRef.current) return;
    setDraft(profile);
  }, [profile]);

  const addTag = () => {
    const next = tag.trim().slice(0, 16);
    if (!next || draft.tags.includes(next) || draft.tags.length >= 6) return;
    setDraft({ ...draft, tags: [...draft.tags, next] });
    setTag("");
  };

  const onTagKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" && event.key !== ",") return;
    event.preventDefault();
    addTag();
  };

  const onAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > MAX_IMAGE_BYTES) {
      setFeedback(zh ? "请选择小于 5 MB 的图片。" : "Choose an image smaller than 5 MB.");
      return;
    }
    try {
      const avatar = await resizeAvatar(file);
      setDraft((current) => ({ ...current, avatar }));
      setFeedback("");
    } catch {
      setFeedback(zh ? "无法读取这张图片，请换一张试试。" : "This image could not be read. Try another one.");
    }
  };

  const save = async () => {
    if (saving || user?.id !== userId) return;
    const operation = ++operationRef.current;
    setSaving(true);
    try {
      const next = { ...draft, bio: draft.bio.trim(), tags: draft.tags.map((item) => item.trim()).filter(Boolean), updatedAt: Date.now() };
      const result = await saveProfile(next);
      if (operationRef.current !== operation || user?.id !== userId) return;
      setDraft(result.profile);
      editingRef.current = false;
      setEditing(false);
      setFeedback(result.remoteSaved
        ? (zh ? "个人资料已同步。" : "Profile synced.")
        : (zh ? "个人资料已保存在这台设备，但云端同步失败。" : "Profile saved on this device, but cloud sync failed."));
    } catch {
      if (user?.id === userId) setFeedback(zh ? "个人资料未能保存，请重试。" : "Profile could not be saved. Try again.");
    } finally {
      if (user?.id === userId) setSaving(false);
    }
  };

  const cancel = () => {
    operationRef.current += 1;
    editingRef.current = false;
    setDraft(currentProfile);
    setTag("");
    setEditing(false);
    setFeedback("");
  };

  const shown = editing ? draft : currentProfile;

  return (
    <section className="profile-panel mt-12" aria-labelledby="profile-heading">
      <div className="profile-summary">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar" role="img" aria-label={zh ? `${displayName}的头像` : `${displayName}'s avatar`}>
            {shown.avatar ? <NextImage src={shown.avatar} alt="" width={320} height={320} unoptimized /> : <span>{initials(displayName)}</span>}
          </div>
          {editing && (
            <button type="button" className="profile-avatar-action" onClick={() => fileInput.current?.click()} title={zh ? "更换头像" : "Change avatar"} aria-label={zh ? "更换头像" : "Change avatar"}>
              <Camera className="size-4" aria-hidden="true" />
            </button>
          )}
          <input ref={fileInput} type="file" accept="image/*" className="sr-only" aria-label={zh ? "选择头像图片" : "Choose avatar image"} onChange={onAvatarChange} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 id="profile-heading" className="text-2xl font-semibold">{displayName}</h2>
              <p className="mt-1 truncate text-sm text-ink/50 dark:text-white/50">{email}</p>
            </div>
            {!editing && (
              <button type="button" onClick={() => { operationRef.current += 1; editingRef.current = true; setEditing(true); setFeedback(""); }} className="atlas-secondary-action" aria-label={zh ? "编辑个人资料" : "Edit profile"}>
                <Pencil className="size-4" aria-hidden="true" />{zh ? "编辑资料" : "Edit profile"}
              </button>
            )}
          </div>

          {!editing && (
            <>
              <p className={cn("profile-bio", !currentProfile.bio && "text-ink/40 dark:text-white/40")}>{currentProfile.bio || (zh ? "写下一句此刻的自我描述。" : "Add a short note about who you are right now.")}</p>
              <div className="profile-tags" aria-label={zh ? "个性标签" : "Personality tags"}>
                {currentProfile.tags.length > 0 ? currentProfile.tags.map((item) => <span key={item}>{item}</span>) : <span className="profile-tag-empty">{zh ? "还没有个性标签" : "No personality tags yet"}</span>}
              </div>
            </>
          )}
        </div>
      </div>

      {editing && (
        <div className="profile-form">
          <label className="block text-sm font-semibold">
            <span>{zh ? "个性签名" : "About you"}</span>
            <textarea value={draft.bio} onChange={(event) => setDraft((current) => ({ ...current, bio: event.target.value.slice(0, 120) }))} rows={3} maxLength={120} className="atlas-account-input mt-2 resize-none" placeholder={zh ? "例如：保持好奇，也允许自己慢一点。" : "For example: Staying curious, while giving myself time."} />
            <span className="mt-2 block text-right text-xs font-normal tabular-nums text-ink/40 dark:text-white/40">{draft.bio.length}/120</span>
          </label>

          <div className="mt-5">
            <span className="text-sm font-semibold">{zh ? "个性标签" : "Personality tags"}</span>
            <div className="profile-tag-editor mt-2">
              {draft.tags.map((item) => (
                <span key={item} className="profile-tag-edit">{item}<button type="button" onClick={() => setDraft((current) => ({ ...current, tags: current.tags.filter((value) => value !== item) }))} aria-label={zh ? `移除标签 ${item}` : `Remove tag ${item}`}><X className="size-3.5" aria-hidden="true" /></button></span>
              ))}
              {draft.tags.length < 6 && <input aria-label={zh ? "添加个性标签" : "Add personality tag"} value={tag} onChange={(event) => setTag(event.target.value.slice(0, 16))} onKeyDown={onTagKeyDown} maxLength={16} placeholder={zh ? "添加标签" : "Add a tag"} />}
              {draft.tags.length < 6 && <button type="button" onClick={addTag} disabled={!tag.trim()} className="profile-add-tag" aria-label={zh ? "添加标签" : "Add tag"}><Plus className="size-4" aria-hidden="true" /></button>}
            </div>
            <p className="mt-2 text-xs text-ink/40 dark:text-white/40">{zh ? "最多 6 个，每个不超过 16 个字符" : "Up to 6 tags, 16 characters each"}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => void save()} disabled={saving} className="atlas-primary-action disabled:opacity-45"><Check className="size-4" aria-hidden="true" />{saving ? (zh ? "正在保存" : "Saving") : (zh ? "保存资料" : "Save profile")}</button>
            <button type="button" onClick={cancel} disabled={saving} className="atlas-text-button disabled:opacity-45">{zh ? "取消" : "Cancel"}</button>
            {draft.avatar && <button type="button" onClick={() => setDraft((current) => ({ ...current, avatar: "" }))} disabled={saving} className="atlas-text-button text-[#a53f3f] disabled:opacity-45"><Trash2 className="size-4" aria-hidden="true" />{zh ? "移除头像" : "Remove avatar"}</button>}
          </div>
        </div>
      )}
      <p className={cn("profile-feedback", feedback && "is-visible")} role={feedback ? "status" : undefined}>{feedback || (syncMode ? (zh ? "头像、签名与标签会随账号同步" : "Avatar, bio, and tags sync with your account") : (zh ? "头像与标签仅保存在这台设备" : "Avatar and tags stay on this device"))}</p>
    </section>
  );
}
