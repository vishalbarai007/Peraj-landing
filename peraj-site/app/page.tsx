import ScrollReveal from "@/components/motion/ScrollReveal";
import FloatingCta from "@/components/FloatingCta";
import Nav from "@/components/Nav";
import Contact from "@/components/sections/Contact";
import Faqs from "@/components/sections/Faqs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Legacy from "@/components/sections/Legacy";
import Pitfalls from "@/components/sections/Pitfalls";
import Process from "@/components/sections/Process";
import Proof from "@/components/sections/Proof";
import Solutions from "@/components/sections/Solutions";
import Why from "@/components/sections/Why";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-beige">
        {site.skip}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <div
          id="after-hero"
          className="relative z-10 -mt-px overflow-clip rounded-t-[2rem] shadow-[0_-24px_60px_-20px_rgb(30_49_87/0.35)]"
        >
          <Why />
          <Pitfalls />
          <Legacy />
          <Solutions />
          <Process />
          <Industries />
          <Proof />
          <Faqs />
          <Contact />
        </div>
      </main>
      <Footer />
      <FloatingCta />
      <ScrollReveal />
    </>
  );
}
