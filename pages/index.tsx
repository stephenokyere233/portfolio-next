import MetaHead from "@/meta";
import Hero from "../components/sections/hero";
import WhatIDo from "../components/sections/what-i-do";
import About from "../components/sections/about";
import Projects from "../components/sections/works";

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
