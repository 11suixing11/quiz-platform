"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SCRIPT_ID = "cloudflare-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileApi {
  render(container: HTMLElement, options: {
    sitekey: string;
    action?: string;
    theme: "auto";
    language: "zh-CN" | "en";
    appearance: "interaction-only";
    callback(token: string): void;
    "expired-callback"(): void;
    "error-callback"(): void;
  }): string;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export interface TurnstileWidgetProps {
  action?: string;
  language?: "zh" | "en";
  resetSignal?: number;
  className?: string;
  onConfigurationChange?(status: TurnstileConfigurationStatus): void;
  onTokenChange(token: string): void;
}

export type TurnstileConfigurationStatus = "loading" | "ready" | "unavailable";

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");
    const onLoad = () => resolve();
    const onError = () => reject(new Error("TURNSTILE_SCRIPT_FAILED"));
    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });
    if (!existing) {
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  });
}

export function TurnstileWidget({
  action,
  language = "zh",
  resetSignal = 0,
  className,
  onConfigurationChange,
  onTokenChange,
}: TurnstileWidgetProps) {
  const reactId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const callbackRef = useRef(onTokenChange);
  const [failed, setFailed] = useState(false);
  const [runtimeSiteKey, setRuntimeSiteKey] = useState("");
  const [configurationLoaded, setConfigurationLoaded] = useState(false);
  const configurationStatus: TurnstileConfigurationStatus = !configurationLoaded
    ? "loading"
    : runtimeSiteKey
      ? "ready"
      : "unavailable";

  useEffect(() => {
    callbackRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    let cancelled = false;
    void fetch("/api/config/turnstile", { cache: "no-store", headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) throw new Error("TURNSTILE_CONFIG_FAILED");
        return response.json() as Promise<{ siteKey?: string | null }>;
      })
      .then((payload) => {
        if (!cancelled) setRuntimeSiteKey(typeof payload.siteKey === "string" ? payload.siteKey.trim() : "");
      })
      .catch(() => {
        if (!cancelled) setRuntimeSiteKey("");
      })
      .finally(() => {
        if (!cancelled) setConfigurationLoaded(true);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    onConfigurationChange?.(configurationStatus);
  }, [configurationStatus, onConfigurationChange]);

  useEffect(() => {
    if (!runtimeSiteKey || !containerRef.current) return;
    let cancelled = false;
    setFailed(false);
    void loadTurnstileScript().then(() => {
      if (cancelled || !window.turnstile || !containerRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: runtimeSiteKey,
        action,
        theme: "auto",
        language: language === "zh" ? "zh-CN" : "en",
        appearance: "interaction-only",
        callback: (token) => callbackRef.current(token),
        "expired-callback": () => callbackRef.current(""),
        "error-callback": () => {
          callbackRef.current("");
          setFailed(true);
        },
      });
    }).catch(() => {
      if (!cancelled) setFailed(true);
    });
    return () => {
      cancelled = true;
      const widgetId = widgetIdRef.current;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
      widgetIdRef.current = null;
      callbackRef.current("");
    };
  }, [action, language, runtimeSiteKey]);

  useEffect(() => {
    const widgetId = widgetIdRef.current;
    if (!widgetId || !window.turnstile) return;
    window.turnstile.reset(widgetId);
    callbackRef.current("");
  }, [resetSignal]);

  if (configurationStatus === "loading") {
    return <p className={cn("text-sm text-ink/55 dark:text-white/55", className)} role="status">
      {language === "zh" ? "正在加载人机验证…" : "Loading human verification…"}
    </p>;
  }

  if (configurationStatus === "unavailable") {
    return <p className={cn("text-sm text-[color:var(--danger)]", className)} role="alert">
      {language === "zh" ? "人机验证尚未配置，当前无法继续。" : "Human verification is not configured, so this action is unavailable."}
    </p>;
  }

  return <div className={className}>
    <div
      ref={containerRef}
      id={`turnstile-${reactId.replaceAll(":", "")}`}
      aria-label={language === "zh" ? "人机验证" : "Human verification"}
    />
    {failed && <p className="mt-2 text-sm text-[color:var(--danger)]" role="alert">
      {language === "zh" ? "验证加载失败，请刷新后重试。" : "Verification failed to load. Refresh and try again."}
    </p>}
  </div>;
}
