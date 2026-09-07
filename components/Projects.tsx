"use client";

import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  CircleDot,
  Download,
  FileAudio,
  FileVideo,
  Link2,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";

function MediaSnapCard() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState<"MP4" | "MP3">("MP4");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!url.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="project-card group relative overflow-hidden rounded-3xl border border-line bg-panel/45 p-5 sm:p-7">
      <div className="project-preview relative overflow-hidden rounded-2xl border border-line bg-deep p-4 sm:p-5">
        <div className="pointer-events-none absolute -left-12 -top-16 h-44 w-44 rounded-full bg-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-blue/10 blur-3xl" />

        <div className="relative flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
            <ArrowDownToLine className="h-3.5 w-3.5 text-cyan" />
            Media converter
          </div>
          <span className="rounded-full border border-cyan/15 bg-cyan/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-cyan/80">
            In development
          </span>
        </div>

        <div className="relative mt-4 rounded-xl border border-line bg-panel/55 p-3 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
          <div className="flex items-center gap-2 rounded-lg border border-line bg-deep/70 px-3 py-2.5">
            <Link2 className="h-3.5 w-3.5 shrink-0 text-muted" />
            <span className="truncate text-[11px] text-muted/70">youtube.com/watch?v=your-video</span>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-deep/50 px-3 py-2">
              <CircleDot className="h-3.5 w-3.5 shrink-0 text-cyan" />
              <span className="text-[10px] text-muted">Ready to convert</span>
            </div>
            <div className="hidden items-center gap-1 rounded-lg border border-line bg-deep/50 p-1 xs:flex sm:flex">
              <span className={`rounded-md px-2 py-1 text-[9px] ${format === "MP4" ? "bg-ink text-void" : "text-muted"}`}>MP4</span>
              <span className={`rounded-md px-2 py-1 text-[9px] ${format === "MP3" ? "bg-ink text-void" : "text-muted"}`}>MP3</span>
            </div>
          </div>
        </div>

        <div className="relative mt-3 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.16em] text-muted/60">
          <FileVideo className="h-3.5 w-3.5" />
          <span>paste</span>
          <span className="h-px w-8 bg-line" />
          <ArrowDownToLine className="h-3.5 w-3.5 text-cyan/70" />
          <span>convert</span>
          <span className="h-px w-8 bg-line" />
          <FileAudio className="h-3.5 w-3.5" />
          <span>download</span>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">MediaSnap</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            A web tool for turning a YouTube link into a clean MP3 or MP4 download — no clutter, just the media you asked for.
          </p>
        </div>
        <Sparkles className="mt-1 hidden h-5 w-5 shrink-0 text-cyan sm:block" />
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-deep/60 p-3">
        <div className="flex items-center gap-2 rounded-xl border border-line bg-panel/70 px-3 py-2.5 transition-colors focus-within:border-cyan/40">
          <Link2 className="h-4 w-4 shrink-0 text-muted" />
          <input
            value={url}
            onChange={(e) => { setUrl(e.target.value); setSubmitted(false); }}
            placeholder="Paste YouTube link here..."
            aria-label="MediaSnap URL"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted/60"
          />
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <div className="grid grid-cols-2 gap-1 rounded-xl border border-line bg-panel/50 p-1 sm:w-40">
            {(["MP4", "MP3"] as const).map((item) => (
              <button key={item} type="button" onClick={() => { setFormat(item); setSubmitted(false); }} className={`rounded-lg px-3 py-2 text-xs font-medium transition-all ${format === item ? "bg-ink text-void shadow-sm" : "text-muted hover:text-ink"}`}>
                {item}
              </button>
            ))}
          </div>
          <button type="button" onClick={submit} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-medium text-void transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.08)] disabled:cursor-not-allowed disabled:opacity-50" disabled={!url.trim()}>
            {submitted ? <><Check className="h-4 w-4" /> Ready for {format}</> : <><Download className="h-4 w-4" /> Convert to {format}</>}
          </button>
        </div>
        <p className="mt-2 px-1 text-[10px] text-muted/60">Interactive preview — the download engine will be connected when MediaSnap is built.</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {["Next.js", "yt-dlp", "FFmpeg"].map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{tag}</span>)}
        <span className="ml-auto flex items-center gap-2 text-xs text-cyan"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> In development</span>
      </div>
    </div>
  );
}

function OnlineStoreCard() {
  return (
    <div className="project-card group relative overflow-hidden rounded-3xl border border-line bg-panel/45 p-5 sm:p-7">
      <div className="project-preview relative flex h-[244px] items-center overflow-hidden rounded-2xl border border-line bg-deep px-4 sm:px-6">
        <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet/10 blur-3xl" />
        <div className="relative w-full rounded-xl border border-line bg-panel/45 p-3 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2"><Store className="h-4 w-4 text-violet" /><span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">Online store</span></div>
            <span className="rounded-full border border-violet/15 bg-violet/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-violet/80">Building</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["01", "02", "03"].map((item) => <div key={item} className="relative h-20 overflow-hidden rounded-lg border border-line bg-deep/70"><div className="absolute inset-x-2 bottom-2 h-1.5 rounded-full bg-line" /><span className="absolute left-2 top-2 text-[9px] text-muted/50">PRODUCT {item}</span></div>)}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg border border-line bg-deep/50 px-3 py-2"><span className="text-[9px] uppercase tracking-[0.15em] text-muted">Catalog → cart → checkout</span><ShoppingBag className="h-3.5 w-3.5 text-violet" /></div>
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-semibold text-ink">Online Store</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">A clean e-commerce project currently under development, focused on a simple browsing and shopping experience.</p></div><ShoppingBag className="mt-1 hidden h-5 w-5 shrink-0 text-violet sm:block" /></div>
      <div className="mt-6 flex flex-wrap items-center gap-2"><span className="rounded-full border border-line px-3 py-1 text-xs text-muted">Under development</span><span className="rounded-full border border-line px-3 py-1 text-xs text-muted">E-commerce</span><span className="ml-auto flex items-center gap-2 text-xs text-violet"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet" /> In progress</span></div>
    </div>
  );
}

function FutureSlotCard() {
  return <div className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-panel/20 p-10 text-center transition-all duration-300 hover:border-cyan/20"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-panel/50 text-muted"><ArrowUpRight className="h-5 w-5" /></div><p className="mt-6 font-display text-xl font-semibold text-ink">More on the way</p><p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">This space is ready for the next project as it ships. The layout will keep the same visual language.</p><a href="https://github.com/Abdulhadi405" target="_blank" rel="noreferrer" className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50">Visit my GitHub</a></div>;
}

export default function Projects() {
  return <section id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:px-12 sm:py-32 lg:px-24"><h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Projects</h2><p className="mt-4 max-w-md text-muted">An evolving collection — here's what's currently in the works.</p><div className="mt-12 grid gap-6 lg:grid-cols-2"><MediaSnapCard /><OnlineStoreCard /><FutureSlotCard /></div></section>;
}
