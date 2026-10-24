"use client";

import { useState } from "react";
import { Braces, Code2, FileCode2, Layers3, Sparkles, Terminal } from "lucide-react";

type Skill = {
  name: string;
  level: string;
  description: string;
  icon: typeof Code2;
  glyph: string;
  tags: string[];
};

const SKILLS: Skill[] = [
  { name: "HTML", level: "Structure", description: "Semantic, accessible page structure and clean component foundations.", icon: FileCode2, glyph: "< />", tags: ["Semantic", "Accessible", "SEO"] },
  { name: "CSS", level: "Interface", description: "Responsive layouts, motion, visual systems and polished interactions.", icon: Layers3, glyph: "#{}", tags: ["Responsive", "Motion", "Visual systems"] },
  { name: "JavaScript", level: "Logic", description: "Interactive experiences, state, browser APIs and practical problem solving.", icon: Braces, glyph: "JS", tags: ["DOM", "APIs", "Interaction"] },
  { name: "React", level: "UI", description: "Reusable components and dynamic interfaces built around user interaction.", icon: Sparkles, glyph: "React", tags: ["Components", "State", "UX"] },
  { name: "Next.js", level: "Full stack", description: "Modern React applications with routing, APIs and production-ready structure.", icon: Code2, glyph: "N", tags: ["Routing", "API", "Deploy"] },
  { name: "TypeScript", level: "Safety", description: "Typed component props, API boundaries and safer application code across the portfolio.", icon: Terminal, glyph: "TS", tags: ["Types", "Interfaces", "Contracts"] },
  { name: "Tailwind CSS", level: "Styling", description: "A utility-first styling system with responsive tokens, states and accessible focus treatment.", icon: Layers3, glyph: "TW", tags: ["Responsive", "Tokens", "States"] },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const skill = SKILLS[active];
  const Icon = skill.icon;

  return (
    <section id="skills" className="editorial-section mx-auto max-w-6xl px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="section-kicker mb-5">
            <Sparkles className="h-3.5 w-3.5 text-cyan" /> Interactive toolkit
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">The toolkit, in motion.</h2>
          <p className="mt-4 max-w-lg text-muted">Explore the stack I use to turn ideas into interfaces, experiments and small web products.</p>
        </div>
        <span className="text-xs uppercase tracking-[0.18em] text-muted">{String(active + 1).padStart(2, "0")} / {String(SKILLS.length).padStart(2, "0")}</span>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {SKILLS.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`group relative min-h-28 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${active === i ? "border-cyan/40 bg-cyan/10 shadow-[0_12px_40px_rgba(95,232,210,0.08)]" : "border-line bg-panel/35 hover:-translate-y-1 hover:border-line/80 hover:bg-panel/60"}`}
              >
                <div className="flex items-start justify-between">
                  <ItemIcon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${active === i ? "text-cyan" : "text-muted"}`} />
                  <span className="font-mono text-xs text-muted/50">{item.glyph}</span>
                </div>
                <div className="mt-6 font-display font-semibold text-ink">{item.name}</div>
                <div className="mt-1 text-xs text-muted">{item.level}</div>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-line bg-deep/70 p-6 sm:p-8">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />
          <div className="relative flex h-full flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-panel text-cyan shadow-inner">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-ink">{skill.name}</p>
                  <p className="text-xs text-muted">{skill.level}</p>
                </div>
              </div>
              <span className="rounded-full border border-cyan/20 bg-cyan/5 px-2.5 py-1 font-mono text-[10px] text-cyan">ACTIVE</span>
            </div>

            <div className="flex flex-1 flex-col justify-center py-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                      <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">How I use it</p>
                      <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">Learn by building</p>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-line bg-panel/60">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan/20 bg-cyan/5">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{skill.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line bg-panel/45 px-3 py-1.5 text-[11px] font-medium text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted">Tap or click another skill to explore the toolkit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
