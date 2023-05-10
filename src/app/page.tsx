"use client"

import Hero from "@/components/Sections/Hero"
import Header from '@/components/Header/index'
import About from '@/components/Sections/About'
import Projects from '@/components/Sections/Projects'
import Contact from '@/components/Sections/Contact'
import Skills from '@/components/Sections/Skills'
import WhatIDo from "@/components/Sections/WhatIDo"
import Testimonials from "@/components/Sections/Testimonials"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main className="relative scroll-smooth select-none">
      <Header />
      <section className="max-w-7xl px-4 mx-auto">
        <Hero />
        <WhatIDo/>
        <About />
        {/* <Projects /> */}
        <Testimonials/>
        <Skills />
        {/* <Contact /> */}
      </section>
      <Footer/>
    </main>
  )
}
