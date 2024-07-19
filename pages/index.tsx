import MetaHead from "@/meta";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import WhatIDo from "@/sections/what-i-do";
import Projects from "@/sections/works";

const Home = () => {
  return (
    <>
      <MetaHead />
      <Hero />
      <WhatIDo />
      <About />
      <Projects />
    </>
  );
};

export default Home;
