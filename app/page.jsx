"use client"

import { Inter } from "next/font/google"
import { Header } from "./components/Header"

// components
import { AboutSection } from "./components/AboutSection"
import { SkillsSection } from "./components/SkillsSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"

const inter = Inter({ subsets: ['latin'] })
  

export default function Home() {


  return (
    <main>
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
