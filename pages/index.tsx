import FooterBanner from "../components/footer/banner";
import MetaHead from "../components/meta";
import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import WhatIDo from "../components/sections/what-i-do";
import Projects from "../components/sections/works";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Hero />
      <WhatIDo />
      <About />
      <Projects />
      <FooterBanner />
    </>
  );
}
