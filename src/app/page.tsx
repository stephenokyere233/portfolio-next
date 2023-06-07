"use client"

import Hero from "@/components/Sections/Hero"
import Header from '@/components/Header/index'
import About from '@/components/Sections/About'
import Projects from '@/components/Sections/Works'
import Contact from '@/components/Sections/Contact'
import Skills from '@/components/Sections/Skills'
import WhatIDo from "@/components/Sections/WhatIDo"
import Testimonials from "@/components/Sections/Testimonials"
import Footer from "@/components/Footer"
import FooterBanner from "@/components/Footer/banner"


export default function Home() {
  return (
    <>
        <Hero />
        <WhatIDo/>
        <About />
        <Projects />
        <Testimonials/>
        <Skills />
        <FooterBanner/>
        {/* <Contact /> */}
    </>
  )
}
