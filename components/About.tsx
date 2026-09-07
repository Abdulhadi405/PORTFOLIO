import { ArrowUpRight, BookOpen, GraduationCap } from "lucide-react";

const learning = ["HTML", "CSS", "JavaScript", "Python", "React", "Next.js"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:px-12 sm:py-32 lg:px-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(95,232,210,0.7)]" />
            A little about me
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">About</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I'm a student who got into building software mostly by taking things apart to see how they worked, then trying to put my own version back together. I went through O Levels and then A Levels, and somewhere in between started spending more time writing code than anything else.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
            This portfolio is one of the first things I've built carefully, end to end — from the visual language down to the working contact form.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/55 p-6 backdrop-blur-xl sm:p-7">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/10 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Education</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">O Levels <span className="text-cyan/60">→</span> A Levels</h3>
                <p className="mt-2 text-sm leading-6 text-muted">The academic path that led me toward computing, technology and building things on the web.</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 flex-1 rounded-full bg-cyan/70" />
              <span className="h-1.5 flex-1 rounded-full bg-blue/50" />
              <span className="h-1.5 flex-1 rounded-full bg-violet/50" />
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-panel/35 p-6 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-cyan" />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Currently learning</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {learning.map((item) => (
                <span key={item} className="rounded-full border border-line bg-deep/60 px-3.5 py-2 text-sm text-ink transition-colors hover:border-cyan/30 hover:text-cyan">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
