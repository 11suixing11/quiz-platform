"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Upload, Trash2, Database, AlertTriangle, Check, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type Lang } from "@/lib/types";
import { exportAllData, importData, clearAllData, getDataSummary, getDataStats, type ImportMode } from "@/lib/data-manager";

const uiText = {
  zh: {
    title: "数据管理",
    subtitle: "导出、导入或清除你的测试数据",
    export: "导出数据",
    exportDesc: "下载所有测试结果为 JSON 文件",
    import: "导入数据",
    importDesc: "从备份文件恢复数据",
    clear: "清除所有数据",
    clearDesc: "永久删除所有测试记录",
    merge: "合并模式",
    mergeDesc: "保留现有数据，只添加新的",
    replace: "替换模式",
    replaceDesc: "清除现有数据，完全替换",
    confirmClear: "确认清除",
    confirmClear2: "再次确认：此操作不可撤销！",
    cancel: "取消",
    summary: "数据概览",
    quizEntries: "测试记录",
    bookmarks: "收藏数",
    storageUsed: "存储占用",
    success: "操作成功",
    error: "操作失败",
    dragDrop: "拖拽文件到此处，或点击选择",
    selectFile: "选择文件",
    noData: "暂无数据",
    imported: "条记录已导入",
  },
  en: {
    title: "Data Manager",
    subtitle: "Export, import, or clear your quiz data",
    export: "Export Data",
    exportDesc: "Download all quiz results as a JSON file",
    import: "Import Data",
    importDesc: "Restore data from a backup file",
    clear: "Clear All Data",
    clearDesc: "Permanently delete all quiz records",
    merge: "Merge Mode",
    mergeDesc: "Keep existing data, only add new entries",
    replace: "Replace Mode",
    replaceDesc: "Clear existing data, fully replace",
    confirmClear: "Confirm Clear",
    confirmClear2: "Confirm again: This cannot be undone!",
    cancel: "Cancel",
    summary: "Data Summary",
    quizEntries: "Quiz Records",
    bookmarks: "Bookmarks",
    storageUsed: "Storage Used",
    success: "Success",
    error: "Error",
    dragDrop: "Drop file here, or click to select",
    selectFile: "Select File",
    noData: "No data yet",
    imported: "records imported",
  },
  ja: {
    title: "データ管理",
    subtitle: "テストデータのエクスポート、インポート、削除",
    export: "データをエクスポート",
    exportDesc: "全テスト結果をJSONファイルでダウンロード",
    import: "データをインポート",
    importDesc: "バックアップファイルからデータを復元",
    clear: "全データを削除",
    clearDesc: "全テスト記録を完全に削除",
    merge: "マージモード",
    mergeDesc: "既存データを保持し、新しいものだけ追加",
    replace: "置換モード",
    replaceDesc: "既存データを消去し、完全に置き換え",
    confirmClear: "削除を確認",
    confirmClear2: "再確認：この操作は元に戻せません！",
    cancel: "キャンセル",
    summary: "データ概要",
    quizEntries: "テスト記録",
    bookmarks: "ブックマーク",
    storageUsed: "使用容量",
    success: "成功",
    error: "エラー",
    dragDrop: "ここにファイルをドロップするか、クリックして選択",
    selectFile: "ファイルを選択",
    noData: "まだデータがありません",
    imported: "件のレコードをインポートしました",
  },
};

export function DataManager({ lang = "zh" }: { lang?: Lang }) {
  const [mounted, setMounted] = useState(false);
  const [summary, setSummary] = useState({ quizEntries: 0, bookmarks: 0, storageUsed: "0 B" });
  const [clearStep, setClearStep] = useState<0 | 1 | 2>(0);
  const [importMode, setImportMode] = useState<ImportMode>("merge");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = uiText[lang];

  const refresh = useCallback(() => {
    try {
      setSummary(getDataSummary());
    } catch {}
  }, []);

  useEffect(() => {
    setMounted(true);
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(null), 3000);
    return () => clearTimeout(timer);
  }, [feedback]);

  const handleExport = useCallback(() => {
    try {
      const count = getDataSummary().quizEntries;
      if (count === 0) {
        setFeedback({ type: "error", message: t.noData });
        return;
      }
      exportAllData();
      setFeedback({ type: "success", message: `${t.success} — ${count} ${t.quizEntries}` });
    } catch {
      setFeedback({ type: "error", message: t.error });
    }
  }, [t]);

  const handleFile = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const json = e.target?.result as string;
        if (!json) return;
        const result = importData(json, importMode);
        if (result.success) {
          setFeedback({ type: "success", message: `${result.imported} ${t.imported}` });
          refresh();
        } else {
          setFeedback({ type: "error", message: result.message });
        }
      };
      reader.readAsText(file);
    },
    [importMode, t, refresh]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => setIsDragging(false), []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file?.name.endsWith(".json")) handleFile(file);
    },
    [handleFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
    [handleFile]
  );

  const handleClear = useCallback(() => {
    if (clearStep === 0) {
      setClearStep(1);
    } else if (clearStep === 1) {
      setClearStep(2);
    } else {
      clearAllData();
      setClearStep(0);
      setFeedback({ type: "success", message: t.success });
      refresh();
    }
  }, [clearStep, t, refresh]);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      {/* Feedback toast */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "fixed right-4 top-4 z-[100] flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-sm",
              feedback.type === "success"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            )}
          >
            {feedback.type === "success" ? <Check className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
            {feedback.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary */}
      <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
        <div className="flex items-center gap-2 mb-4">
          <Database className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
          <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.summary}</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{summary.quizEntries}</div>
            <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.quizEntries}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{summary.bookmarks}</div>
            <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.bookmarks}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{summary.storageUsed}</div>
            <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.storageUsed}</div>
          </div>
        </div>
      </Card>

      {/* Export */}
      <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Download className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.export}</h3>
            </div>
            <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.exportDesc}</p>
          </div>
          <Button onClick={handleExport} size="sm" className="rounded-full">
            <Download className="h-3.5 w-3.5 mr-1" />
            {t.export}
          </Button>
        </div>
      </Card>

      {/* Import */}
      <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
        <div className="flex items-center gap-2 mb-3">
          <Upload className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
          <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.import}</h3>
        </div>
        <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50 mb-3">{t.importDesc}</p>

        {/* Import mode toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setImportMode("merge")}
            className={cn(
              "flex-1 rounded-xl px-3 py-2 text-xs font-medium transition-all",
              importMode === "merge"
                ? "bg-[#2C2C2C] dark:bg-white text-white dark:text-[#2C2C2C]"
                : "bg-[#2C2C2C]/5 dark:bg-white/10 text-[#2C2C2C]/60 dark:text-white/60"
            )}
          >
            {t.merge}
            <span className="block text-[10px] opacity-70 mt-0.5">{t.mergeDesc}</span>
          </button>
          <button
            onClick={() => setImportMode("replace")}
            className={cn(
              "flex-1 rounded-xl px-3 py-2 text-xs font-medium transition-all",
              importMode === "replace"
                ? "bg-[#2C2C2C] dark:bg-white text-white dark:text-[#2C2C2C]"
                : "bg-[#2C2C2C]/5 dark:bg-white/10 text-[#2C2C2C]/60 dark:text-white/60"
            )}
          >
            {t.replace}
            <span className="block text-[10px] opacity-70 mt-0.5">{t.replaceDesc}</span>
          </button>
        </div>

        {/* Drop zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 cursor-pointer transition-all",
            isDragging
              ? "border-[#2C2C2C] dark:border-white bg-[#2C2C2C]/5 dark:bg-white/5"
              : "border-[#2C2C2C]/15 dark:border-white/15 hover:border-[#2C2C2C]/30 dark:hover:border-white/30"
          )}
        >
          <FileJson className="h-8 w-8 text-[#2C2C2C]/30 dark:text-white/30" />
          <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.dragDrop}</p>
          <span className="text-[10px] text-[#2C2C2C]/30 dark:text-white/30">.json</span>
        </div>
        <input ref={fileInputRef} type="file" accept=".json" onChange={handleFileInput} className="hidden" />
      </Card>

      {/* Clear */}
      <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-red-500/20">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trash2 className="h-4 w-4 text-red-500/60" />
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.clear}</h3>
            </div>
            <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.clearDesc}</p>
          </div>
          <div className="flex items-center gap-2">
            {clearStep > 0 && (
              <Button onClick={() => setClearStep(0)} variant="outline" size="sm" className="rounded-full text-xs">
                {t.cancel}
              </Button>
            )}
            <Button
              onClick={handleClear}
              variant={clearStep === 2 ? "destructive" : "outline"}
              size="sm"
              className={cn("rounded-full text-xs", clearStep < 2 && "border-red-500/30 text-red-500 hover:bg-red-500/10")}
            >
              {clearStep === 0 ? t.clear : clearStep === 1 ? t.confirmClear : t.confirmClear2}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
