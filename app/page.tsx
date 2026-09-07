import Nav from "@/components/Nav";
import SocialDock from "@/components/SocialDock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal delay={40}><About /></ScrollReveal>
        <ScrollReveal delay={60}><Skills /></ScrollReveal>
        <ScrollReveal delay={80}><Projects /></ScrollReveal>
        <ScrollReveal delay={100}><Contact /></ScrollReveal>
      </main>
      <Footer />
      <SocialDock />
      <ScrollTop />
    </>
  );
}
