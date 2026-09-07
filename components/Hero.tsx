import Interactive3D from "@/components/Interactive3D";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28 sm:px-12 sm:pb-24 lg:px-24"
    >
      <div className="hero-3d-anchor absolute inset-y-0 right-0 hidden w-[47%] items-center justify-center lg:flex">
        <Interactive3D />
      </div>

      <div className="relative z-10 max-w-5xl lg:max-w-4xl">
        <p className="mb-4 text-sm text-muted">Hi, I&apos;m</p>

        <h1 className="font-display text-[clamp(3.2rem,15vw,6rem)] font-semibold leading-[0.88] tracking-[-0.045em] text-ink sm:text-[clamp(4.5rem,10vw,7rem)] lg:text-[clamp(5rem,7.2vw,8rem)]">
          Abdulhadi
          <br />
          <span className="text-ink/55">Tahir</span>
        </h1>

        <p className="mt-7 max-w-md text-base leading-7 text-muted sm:text-lg">
          A student exploring computer science, programming, and technology - learning by building and refining ideas on the web.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-void transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(95,232,210,0.25)]"
          >
            Explore
          </a>
          <a
            href="/Abdulhadi_Tahir_CV.pdf"
            download
            className="rounded-full border border-line bg-panel/25 px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/45 hover:bg-panel/45"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-3d-mobile relative z-10 mt-10 flex w-full justify-center lg:hidden">
        <Interactive3D />
      </div>
    </section>
  );
}
