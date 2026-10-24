"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CircleDot,
  Code2,
  ExternalLink,
  LayoutDashboard,
  Share2,
  ShoppingBag,
  Store,
  X,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: "Business software" | "Web experience";
  description: string;
  details: string;
  tags: string[];
  status: string;
  icon: typeof Store;
  liveUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "ordexa",
    title: "Ordexa",
    category: "Business software",
    description: "Every order, in flow. A restaurant operations SaaS concept for independent restaurants, cafés, and takeaways.",
    details: "Ordexa is currently in development, exploring a clearer way to coordinate the work behind every service. This portfolio preview is illustrative and does not represent a live production system.",
    tags: ["Next.js", "Restaurant operations", "In development"],
    status: "Concept in development",
    icon: Code2,
  },
  {
    id: "store",
    title: "Online Store",
    category: "Business software",
    description: "A clean e-commerce project under development, focused on a simple browsing and shopping experience.",
    details: "The project is being explored as a straightforward catalog-to-cart experience. It remains under development and has no public demo linked here yet.",
    tags: ["E-commerce", "Under development"],
    status: "In progress",
    icon: ShoppingBag,
  },
  {
    id: "clinic",
    title: "Family Health Clinic",
    category: "Web experience",
    description: "A clinic-focused web experience for family healthcare information, services, timings, and appointment contact.",
    details: "The live website presents Family Health Clinic, Dr. Zarrin Khaliq Chaudhary, healthcare service categories, clinic timings, and a WhatsApp appointment contact flow.",
    tags: ["Healthcare web", "Live website"],
    status: "Live project",
    icon: Store,
    liveUrl: "https://abdulhadi405.github.io/Family-Health-Clinic/",
  },
];

function OrdexaPreview() {
  return (
    <div className="project-preview relative min-h-[260px] overflow-hidden rounded-[1.25rem] border border-line bg-[#eef2ff] p-4 sm:p-6">
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-violet/15 blur-3xl" />
      <div className="relative mx-auto max-w-md rounded-xl border border-white/80 bg-white/90 p-3 shadow-[0_18px_45px_rgba(43,64,130,0.14)]">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3"><div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-xs font-bold text-white">O</div><span className="font-display text-xs font-semibold text-ink">Ordexa</span></div><span className="rounded-full bg-blue/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-blue">Concept</span></div>
        <div className="mt-4 grid grid-cols-[1.15fr_.85fr] gap-3"><div className="rounded-lg border border-slate-200 bg-slate-50 p-3"><div className="flex items-center justify-between"><span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">Today</span><LayoutDashboard className="h-3.5 w-3.5 text-blue" /></div><div className="mt-4 grid grid-cols-3 gap-1.5">{["Open", "Preparing", "Ready"].map((label, index) => <div key={label} className="rounded-md bg-white p-2"><span className="block text-[8px] text-slate-400">{label}</span><span className="mt-1 block font-display text-sm font-semibold text-ink">{[12, 7, 19][index]}</span></div>)}</div><div className="mt-3 space-y-1.5">{[["#1042", "Dine-in", "Preparing"], ["#1041", "Takeaway", "Ready"]].map(([id, type, state]) => <div key={id} className="flex items-center justify-between rounded-md bg-white px-2.5 py-2 text-[9px]"><span className="font-semibold text-ink">{id} <span className="font-normal text-slate-400">{type}</span></span><span className="text-blue">{state}</span></div>)}</div></div><div className="rounded-lg border border-slate-200 bg-white p-3"><span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">Service flow</span><div className="mt-4 space-y-2">{["Order received", "Kitchen queue", "Ready to serve"].map((item, index) => <div key={item} className="flex items-center gap-2 text-[9px] text-slate-600"><span className={`flex h-4 w-4 items-center justify-center rounded-full ${index === 2 ? "bg-blue text-white" : "bg-blue/10 text-blue"}`}>{index === 2 ? <Check className="h-2.5 w-2.5" /> : index + 1}</span>{item}</div>)}</div><div className="mt-5 h-1.5 rounded-full bg-slate-100"><div className="h-full w-2/3 rounded-full bg-blue" /></div></div></div>
      </div>
    </div>
  );
}

function StorePreview() {
  return <div className="project-preview relative flex min-h-[260px] items-center overflow-hidden rounded-[1.25rem] border border-line bg-[#f5f1ff] px-4 sm:px-6"><div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet/15 blur-3xl" /><div className="relative w-full rounded-xl border border-white/80 bg-white/90 p-3 shadow-[0_18px_45px_rgba(73,48,130,0.1)]"><div className="flex items-center justify-between border-b border-slate-200 pb-3"><div className="flex items-center gap-2"><Store className="h-4 w-4 text-violet" /><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Online store</span></div><span className="rounded-full bg-violet/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-violet">Building</span></div><div className="mt-4 grid grid-cols-3 gap-2">{["01", "02", "03"].map((item) => <div key={item} className="relative h-20 overflow-hidden rounded-lg border border-slate-200 bg-slate-50"><div className="absolute inset-x-2 bottom-2 h-1.5 rounded-full bg-slate-200" /><span className="absolute left-2 top-2 text-[9px] text-slate-400">PRODUCT {item}</span></div>)}</div><div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"><span className="text-[9px] uppercase tracking-[0.15em] text-slate-500">Catalog → cart → checkout</span><ShoppingBag className="h-3.5 w-3.5 text-violet" /></div></div></div>;
}

function ClinicPreview() {
  return <div className="project-preview relative flex min-h-[260px] items-center overflow-hidden rounded-[1.25rem] border border-line bg-[#102a32] px-5 sm:px-7"><div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" /><div className="relative w-full rounded-xl border border-white/10 bg-white/[.08] p-4"><div className="flex items-center justify-between border-b border-white/10 pb-3"><div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan/15 text-cyan">+</span><span className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/70">Family Health Clinic</span></div><span className="text-[9px] uppercase tracking-[.14em] text-cyan/80">Concept preview</span></div><div className="mt-4 grid grid-cols-[1.2fr_.8fr] gap-2"><div className="rounded-lg bg-white/[.07] p-3"><span className="block text-[9px] uppercase tracking-[.14em] text-white/40">Care, made clear</span><span className="mt-2 block h-2 w-3/4 rounded-full bg-white/20" /><span className="mt-2 block h-2 w-1/2 rounded-full bg-cyan/35" /></div><div className="rounded-lg border border-cyan/20 bg-cyan/10 p-3"><span className="block text-[9px] text-cyan/80">Appointments</span><span className="mt-3 block text-lg text-white">→</span></div></div></div></div>;
}

function ProjectPreview({ id }: { id: string }) {
  if (id === "ordexa") return <OrdexaPreview />;
  if (id === "store") return <StorePreview />;
  return <ClinicPreview />;
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [shared, setShared] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const visibleProjects = filter === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  useEffect(() => {
    if (!selected) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus();
    };
  }, [selected]);

  const shareProject = async (project: Project) => {
    const shareData = { title: `${project.title} — Abdulhadi Tahir`, text: project.description, url: project.liveUrl || window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareData.url;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        if (!copied) throw new Error("Clipboard access is unavailable.");
      }
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShared(false);
    }
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
      <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">Selected work</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Things I&apos;m building</h2></div><p className="max-w-sm text-sm leading-7 text-muted">A small, evolving collection of interfaces and tools. Each one is a chance to make something clearer and more useful.</p></div>
      <div className="project-filters" role="group" aria-label="Filter projects">{(["All", "Business software", "Web experience"] as const).map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`project-filter ${filter === item ? "project-filter--active" : ""}`}>{item}</button>)}</div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        {visibleProjects.map((project) => { const Icon = project.icon; return <article key={project.id} className="project-card group rounded-[1.75rem] border border-line bg-panel p-4 shadow-[0_14px_45px_rgba(0,0,0,.16)] sm:p-6"><button type="button" className="block w-full text-left" onClick={() => setSelected(project)} aria-label={`View details for ${project.title}`} data-cursor="interactive"><ProjectPreview id={project.id} /><span className="project-concept-label">{project.id === "clinic" ? "Illustrative concept preview · not a screenshot" : "Illustrative interface preview"}</span></button><div className="mt-5 flex items-start justify-between gap-4"><div><div className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-cyan">{project.category}</div><h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{project.title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-muted">{project.description}</p></div><Icon className="mt-1 hidden h-5 w-5 shrink-0 text-blue sm:block" /></div><div className="mt-5 flex flex-wrap items-center gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-line bg-deep px-3 py-1.5 text-xs text-muted">{tag}</span>)}<span className="ml-auto flex items-center gap-2 text-xs font-medium text-blue"><CircleDot className="h-3 w-3" /> {project.status}</span></div><div className="mt-5 flex flex-wrap gap-2"><button type="button" onClick={() => setSelected(project)} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink transition hover:border-cyan/40 hover:text-cyan">View details <ArrowUpRight className="h-3.5 w-3.5" /></button>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-void transition hover:-translate-y-0.5">Visit live website <ExternalLink className="h-3.5 w-3.5" /></a>}</div></article>; })}
      </div>
      <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-line bg-deep/60 p-5 text-center sm:flex-row sm:text-left"><div><p className="font-display font-semibold text-ink">More experiments are on the way.</p><p className="mt-1 text-sm text-muted">Follow along for the next thing I ship.</p></div><a href="https://github.com/Abdulhadi405" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-blue/40 hover:text-blue">Visit GitHub <ArrowUpRight className="h-4 w-4" /></a></div>
      {selected && <div className="project-modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button ref={closeButtonRef} type="button" className="project-modal-close" onClick={() => setSelected(null)} aria-label="Close project details"><X className="h-4 w-4" /></button><p className="section-kicker">{selected.category}</p><h3 id="project-modal-title" className="mt-3 font-display text-3xl font-semibold text-ink">{selected.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{selected.details}</p><div className="mt-6 flex flex-wrap gap-2">{selected.tags.map((tag) => <span key={tag} className="rounded-full border border-line bg-deep px-3 py-1.5 text-xs text-muted">{tag}</span>)}</div><div className="mt-8 flex flex-wrap gap-3">{selected.liveUrl && <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-void">Visit live website <ExternalLink className="h-4 w-4" /></a>}<button type="button" onClick={() => shareProject(selected)} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-cyan/40 hover:text-cyan"><Share2 className="h-4 w-4" /> {shared ? "Link copied" : "Share project"}</button></div></section></div>}
    </section>
  );
}
