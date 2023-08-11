"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { skillsArray } from './data/portfolioData'
import { projectsArray } from './data/portfolioData'
import { ProjectCard } from './components/ProjectCard'
import { motion } from 'framer-motion'

import Typewriter from "typewriter-effect"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const today = new Date()
  const year = today.toLocaleString("default", {
    year: "numeric"
  })


  return (
    <main>
      <header className="h-[400px] relative">
          {/* <div className="social-icons-container">
              <a href="https://www.linkedin.com/in/taras-terry-babyuk/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/tbabyuk" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
            </div> */}
          <div className="header-content grid md:grid-cols-5 lg:grid-cols-4 w-full h-full bg-[url('/images/header_bg.jpg')] bg-center bg-cover absolute top-[-30px] -skew-y-2 -z-20">

              <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0, skewY: 2 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className={`grid place-items-center md:justify-end md:col-span-3 lg:col-span-2 skew-y-2`}>
                  <div className="flex flex-col gap-3 mt-10 md:gap-5 lg:gap-8 md:mt-0 text-gray-100">
                      <h2 className="text-3xl md:text-5xl xl:text-6xl font-light">Hi, I'm Terry</h2>
                      <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold">A Front-End Developer</h3>
                      <h4 className="text-xl md:text-2xl font-thin italic">...with a passion for everything web!</h4>
                  </div>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0, skewY: 2 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="grid place-items-center md:col-span-2 lg:col-span-2 skew-y-2">
                  <div className="header-right mb-10 md:mb-0 text-2xl md:text-3xl xl:text-4xl text-gray-100">
                  <Typewriter 
                          options={{
                          strings: ["HTML/CSS", "Bootstrap", "Tailwind", "JavaScript", "React", "NextJS", "FireBase"],
                          autoStart: true,
                          loop: true,
                          }}
                      />                
                  </div>
              </motion.div>
          </div>  
      </header>


      {/* ABOUT SECTION */}
      <section className="about-section py-28 flex flex-col justify-center bg-gray-50" id="about">

        <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-700 pb-20">             
            <div className="flex flex-col gap-3">
                <h4 className="text-3xl">ABOUT ME</h4>
                <p>A bit about who I am and what drives me</p>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row px-5 lg:px-20 xl:px-48">
            <div className="mb-16 lg:mb-0 grid place-items-center lg:me-10 xl:me-20">
            <img src="/Terry.jpg" style={{maxWidth: "250px"}} className="rounded" alt="photo of Terry" />
            </div>
            <div className="flex items-center">
                <div className="leading-8">
                    Welcome and thank you for visiting my portfolio page! My name is Terry and I am a Front End Developer focusing on JavaScript and React. I love the creative process involved in web development and the challenge that comes with bringing an idea to life through code. I also enjoy the learning process involved in web development and am always trying to improve and upgrade my skills. In addition to coding, I also occasionally enjoy writing blog articles and making videos about code. My blog can be found at <a href="https://strictlywebdev.com/blog/" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">strictlywebdev.com/blog/</a> and my YouTube videos at <a href="https://www.youtube.com/@strictlywebdev" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">youtube.com/@strictlywebdev</a>. Please feel free to browse some of my projects below and reach out should you have any questions or professional inquiries. Thank you again!
                </div>
            </div>
        </div>
      </section>


      {/* SKILLS SECTION */}
      <section className="skills-section py-28 flex flex-col justify-center bg-[url('/images/skills_bg.jpg')]" id="skills">

        <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-50 pb-20">             
            <div className="flex flex-col gap-3">
                <h4 className="text-3xl">SKILLS</h4>
                <p>Some technologies I have worked with</p>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className={`grid grid-cols-4 place-items-center gap-16 px-5 lg:px-8 xl:px-24 skills-list`}>
            {skillsArray && 
                skillsArray.map((skill) => (
                <Image
                    key={skill.id}
                    src={skill.src}
                    alt={skill.alt}
                    width={90}
                    height={90}
                    quality={80}
                    title={skill.title}
                    className=" hover:rotate-6 transition ease-in-out"
                />
            ))}
        </motion.div>
      </section>


      {/* PROJECTS SECTION */}
      <section className={`projects-section py-28 flex flex-col justify-center bg-gray-50`} id="projects">

        <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-700 pb-20">             
            <div className="flex flex-col gap-3">
                <h4 className="text-3xl">PROJECTS</h4>
                <p>A few of my projects</p>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-row flex-wrap justify-center gap-20 px-5 lg:px-8 xl:px-18">
            {projectsArray && 
                projectsArray.map((project) => (
                    <ProjectCard
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        live={project.liveUrl}
                        github={project.githubUrl}
                    />
                ))
            }
        </motion.div>
      </section>


      {/* CONTACT SECTION */}
      <section className={`contact-section py-28 flex flex-col justify-center bg-[url('/images/contact_bg.jpg')]`} id="contact">
    
        <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-50 pb-20">             
            <div className="flex flex-col gap-3">
                <h4 className="text-3xl">CONTACT ME</h4>
                <p>Let's get in touch!</p>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className={`flex justify-center contact-form px-5 lg:px-20 xl:px-48`}>
              <form className="flex flex-col w-[500px] p-5">
                  <input type="text" name="name" placeholder="your name" className="py-2 ps-3 rounded mb-7" />
                  <input type="email" name="email" placeholder="your email" className="py-2 ps-3 rounded mb-7" />
                  <textarea name="message" id="" cols="30" rows="5" placeholder="your message" className="py-2 ps-3 rounded mb-12" />
                  <button className="rounded h-10 text-gray-50 bg-sky-700 hover:bg-sky-800">Send!</button>
              </form>
        </motion.div>
      </section>

      <footer className="h-12 grid place-items-center bg-gray-950 text-gray-50 text-sm">
          &copy; {year}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Taras Terry Babyuk&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Strictly Web Dev
      </footer>

    </main>
  )
}
