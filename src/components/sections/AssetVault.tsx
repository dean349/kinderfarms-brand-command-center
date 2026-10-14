"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText, CheckCircle2, Download, Copy, Database, RefreshCw, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND_COLORS, MASTER_SKU_CATALOG } from "@/lib/tokens";

export default function AssetVault() {
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; size: number; status: string }>>([]);
  const [exportFormat, setExportFormat] = useState<"css" | "tailwind" | "json">("css");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newItems = acceptedFiles.map((f) => ({
      name: f.name,
      size: f.size,
      status: "Staged in Client Asset Cache"
    }));
    setUploadedFiles((prev) => [...prev, ...newItems]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const getExportCode = () => {
    if (exportFormat === "css") {
      return `:root {\n` + BRAND_COLORS.map((c) => `  --kf-${c.id}: ${c.hex}; /* ${c.name} */`).join("\n") + `\n  --kf-button-height: 55px;\n  --kf-button-radius: 4px;\n  --kf-container-max: 1600px;\n}`;
    }
    if (exportFormat === "tailwind") {
      return `@theme {\n` + BRAND_COLORS.map((c) => `  --color-kf-${c.id}: ${c.hex};`).join("\n") + `\n  --spacing-btn-height: 55px;\n  --radius-btn: 4px;\n}`;
    }
    return JSON.stringify(
      {
        brand: "KinderFarms",
        version: "2.0.0",
        system: "Open Brand Architecture",
        credentialsRequired: false,
        tokens: BRAND_COLORS,
        skuCount: MASTER_SKU_CATALOG.length
      },
      null,
      2
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getExportCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = getExportCode();
    const ext = exportFormat === "json" ? "json" : exportFormat === "tailwind" ? "css" : "css";
    const filename = `kinderfarms-tokens.${ext}`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <section id="section-vault" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#1A6DFF]/10 text-[#1A6DFF] border border-[#1A6DFF]/30 rounded-[4px]">
          SECTION 11
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Brand Asset Vault & Multi-Format Token Exporter
        </h2>
      </div>

      {/* Zero-Credential Local Architecture Banner */}
      <div className="bg-[#0E1320] text-white p-6 rounded-[4px] border border-[#1E2638] shadow-md mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[4px] bg-[#3E9B57]/20 border border-[#3E9B57]/40 flex items-center justify-center text-[#3E9B57]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono font-bold text-white">Open Client Brand Hub (Zero-Credential Mode)</span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-[#3E9B57]/20 text-[#3E9B57] border border-[#3E9B57]/40">
                ACTIVE · STANDALONE
              </span>
            </div>
            <p className="text-xs text-white/60 font-mono mt-0.5">
              Client Catalog: <span className="text-[#1A6DFF]">24 Master SKUs</span> • Seed Tokens: <span className="text-white">8 Flavors</span> • Auth Barrier: <span className="text-[#3E9B57]">None (Frictionless Access)</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 text-xs font-mono bg-white/10 hover:bg-white/20 text-white rounded-[4px] transition-all flex items-center gap-1.5 shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-[#1A6DFF]" />
            <span>{downloaded ? "Downloaded!" : "Download Tokens"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Drag & Drop Ingestion */}
        <div className="lg:col-span-6 bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-[#1A6DFF]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171445] font-bold">
                Local Asset Hub & Media Staging
              </h3>
            </div>
            <p className="text-xs text-[#444749] mb-6 leading-relaxed">
              Drag & drop packaging dielines, photography, vector logos, or brand specifications. Assets are inspected and staged client-side with zero external login or server requirements.
            </p>

            <div
              {...getRootProps()}
              className={`p-8 rounded-[4px] border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                isDragActive
                  ? "border-[#1A6DFF] bg-[#1A6DFF]/10"
                  : "border-[#ECECEC] bg-[#F9F7F4] hover:border-[#1A6DFF]"
              }`}
            >
              <input {...getInputProps()} />
              <UploadCloud className="w-8 h-8 text-[#767676] mb-2" />
              <p className="text-xs font-semibold text-[#171445]">
                Drag and drop asset files here, or <span className="text-[#1A6DFF]">browse files</span>
              </p>
              <p className="text-[10px] text-[#767676] mt-1">Supports PDF, PNG, SVG, AI, CSV</p>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                {uploadedFiles.map((f, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-4 h-4 text-[#1A6DFF] shrink-0" />
                      <span className="text-[#171445] font-semibold truncate">{f.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#3E9B57] font-bold shrink-0">{f.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#ECECEC] flex items-center justify-between text-xs text-[#767676] font-mono">
            <span>Client Asset Hub: <code className="text-[#171445]">local-memory</code></span>
            <span className="text-[#3E9B57] font-bold">Open Access</span>
          </div>
        </div>

        {/* Right: Multi-Format Token Exporter */}
        <div className="lg:col-span-6 bg-[#0E1320] text-white p-8 rounded-[4px] border border-[#1E2638] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                {(["css", "tailwind", "json"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setExportFormat(fmt)}
                    className={`px-3 py-1 text-xs font-mono uppercase font-bold rounded-[4px] transition-all ${
                      exportFormat === fmt
                        ? "bg-[#D11994] text-white shadow"
                        : "bg-white/10 text-white/60 hover:text-white"
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-white/10 hover:bg-white/20 text-white rounded-[4px] transition-all"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#3E9B57]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy Code"}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-[#1A6DFF]/20 hover:bg-[#1A6DFF]/30 text-[#1A6DFF] border border-[#1A6DFF]/40 rounded-[4px] transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </div>

            <pre className="p-4 rounded-[4px] bg-black/60 border border-white/10 text-xs font-mono text-[#F2C14E] overflow-x-auto max-h-[280px]">
              <code>{getExportCode()}</code>
            </pre>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
            <span>KinderFarms Master Tokens v2.0</span>
            <span className="text-[#3E9B57]">100% Production Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
