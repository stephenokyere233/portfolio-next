import About from "@/about";
import Hero from "@/hero";
import WhatIDo from "@/what-i-do";
import Projects from "@/works";
import { homeMetadata } from "../lib/metadata";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <About />
      <Projects />
    </>
  );
}
