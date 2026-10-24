import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";

function WorkspacePreview() {
  return (
    <div className="hero-workspace" aria-label="Illustrative software workspace">
      <div className="hero-workspace__glow" />
      <div className="hero-window hero-window--back">
        <div className="hero-window__bar"><span /><span /><span /></div>
        <div className="hero-window__lines"><i /><i /><i /><i /></div>
      </div>
      <div className="hero-window hero-window--front">
        <div className="hero-window__bar"><span /><span /><span /><b>workspace / build</b></div>
        <div className="hero-window__body">
          <div className="hero-window__sidebar"><i /><i /><i /><i /></div>
          <div className="hero-window__content">
            <div className="hero-window__eyebrow">A small idea, made useful</div>
            <div className="hero-window__title">Build with<br /><em>intention.</em></div>
            <div className="hero-window__meter"><span /><span /><span /></div>
            <div className="hero-window__footer"><span>interactive surface</span><strong>● live preview</strong></div>
          </div>
        </div>
      </div>
      <div className="hero-float hero-float--top"><Code2 className="h-4 w-4" /><span>component thinking</span></div>
      <div className="hero-float hero-float--bottom"><Sparkles className="h-4 w-4" /><span>curious by default</span></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden px-6 pb-20 pt-32 sm:px-12 sm:pb-28 lg:px-16 lg:pt-40">
      <div className="hero-scanline" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
        <div>
          <div className="hero-status"><span className="hero-status__dot" /> Exploring, learning, building</div>
          <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.3rem,11vw,7.8rem)] font-semibold leading-[.84] tracking-[-.065em] text-ink">
            Thoughtful<br /><span className="hero-title-accent">software</span><br />in progress.
          </h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-muted sm:text-lg">
            I&apos;m Abdulhadi, an A Levels student exploring computer science and the web by turning curious ideas into useful interfaces.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="hero-primary-action">View my work <ArrowDownRight className="h-4 w-4" /></a>
            <a href="#contact" className="hero-secondary-action">Contact me <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-14 flex items-center gap-5 text-xs text-muted">
            <span className="flex items-center gap-2"><Layers3 className="h-4 w-4 text-cyan" /> Web interfaces</span>
            <span className="h-4 w-px bg-line" />
            <span>Learning in public</span>
          </div>
        </div>
        <WorkspacePreview />
      </div>
      <a href="#about" className="hero-scroll-hint" aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDownRight className="h-4 w-4" /></a>
    </section>
  );
}
