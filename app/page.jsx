"use client"

import { Inter } from "next/font/google"


// components
import { AboutSection } from "./components/AboutSection"
import { SkillsSection } from "./components/SkillsSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"

const inter = Inter({ subsets: ['latin'] })
  

export default function Home() {


  return (
    <main>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
