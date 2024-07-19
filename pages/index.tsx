import About from "@/about";
import Hero from "@/hero";
import MetaHead from "@/meta";
import WhatIDo from "@/what-i-do";
import Projects from "@/works";

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
