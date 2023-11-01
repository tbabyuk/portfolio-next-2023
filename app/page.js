"use client"

import Image from "next/image"
import { Inter } from "next/font/google"

import { skillsArray } from "./data/portfolioData"
import { projectsArray } from "./data/portfolioData"
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { BiSolidFilePdf } from "react-icons/bi"

// components
import { ProjectCard } from "./components/ProjectCard"
import { ContactForm } from "./components/ContactForm"

import Typewriter from "typewriter-effect"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "My Portfolio",
    description: "Terry Babyuk Web Dev Portfolio",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "My Portfolio",
        description: "Terry Babyuk Web Dev Portfolio",
        url: "https://www.terrywebdev.com/",
        siteName: "My Portfolio",
        locale: "en_US",
        type: "website",
        // publishedTime: "2020-07-27T22:12:00+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-staff.appspot.com/o/other%2Fbanner_october_2023_1200.png?alt=media&token=11c54ef7-2639-4d5a-89da-b88db36e50a0&_gl=1*1jc20tt*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5ODgwMDA4OC45OS4xLjE2OTg4MDAyMjcuMzMuMC4w",
                width: 1200,
                height: 300,
                type: "image/jpeg"
            }
        ],
    },
  }
  

export default function Home() {

  const today = new Date()
  const year = today.toLocaleString("default", {
    year: "numeric"
  })


  return (
    <main>
      <header className="h-[400px] relative">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="flex absolute top-4 right-4">
              <a href="https://www.linkedin.com/in/taras-terry-babyuk/" target="_blank"><BsLinkedin className="mb-4 text-4xl text-gray-300 opacity-70" /></a>
              <a href="https://github.com/tbabyuk" target="_blank"><BsGithub className="text-4xl text-gray-300 opacity-70 ms-3" /></a>
          </motion.div>

          <div className="header-content grid md:grid-cols-5 lg:grid-cols-4 w-full h-full bg-[url('/images/header_bg.jpg')] bg-center bg-cover absolute top-[-30px] -skew-y-2 -z-20">
            <motion.div
                initial={{ opacity: 0, x: 0, skewY: 2 }}
                whileInView={{ opacity: 1, x: 0, skewY: 2 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className={`grid place-items-center md:justify-end md:col-span-3 lg:col-span-2 skew-y-2`}>
                <div className="flex flex-col gap-3 mt-10 md:gap-5 lg:gap-8 md:mt-0 text-gray-100">
                    <h2 className="text-3xl md:text-5xl xl:text-6xl font-light">Hi, I&apos;m Terry</h2>
                    <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold">A Front-End Developer</h3>
                    <h4 className="text-xl md:text-2xl font-thin italic">...with a passion for everything web!</h4>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 0, skewY: 2 }}
                whileInView={{ opacity: 1, x: 0, skewY: 2 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="grid place-items-center md:col-span-2 lg:col-span-2 skew-y-2">
                <div className="header-right mb-10 md:mb-0 text-2xl md:text-3xl xl:text-4xl text-gray-100">
                <Typewriter 
                        options={{
                        strings: ["HTML/CSS", "Bootstrap", "Tailwind", "JavaScript", "React", "Next.js", "FireBase"],
                        autoStart: true,
                        loop: true,
                        }}
                    />                
                </div>
            </motion.div>
          </div>

      </header>


      {/* ABOUT SECTION */}
      <section className="about-section relative pt-32 pb-44 flex flex-col justify-center bg-gray-50" id="about">
        <a href="/terry_web_dev_2023.pdf" className="absolute flex items-center top-2 right-8 py-3 px-4 bg-[#f09c6c] hover:bg-[#ec8346] rounded text-gray-50" download><BiSolidFilePdf />&nbsp;RESUME</a>
        <div className="flex flex-col lg:flex-row px-5 sm:px-12 md:px-20 lg:px-20 xl:px-48">
            <div className="mb-16 lg:mb-0 grid place-items-center lg:me-10 xl:me-20">
            <img 
                src="/images/terry.jpg"
                // width="1000"
                // height="1000"
                alt="photo of Terry" 
                style={{maxWidth: "250px"}}
                className="rounded"  
            />
            </div>
            <div className="flex items-center">
                <div className="leading-8">
                    Welcome and thank you for visiting my portfolio page! My name is Terry and I am a Front End Developer focusing on JavaScript and React. I love the creative process involved in web development and the challenge that comes with bringing an idea to life through code. In addition to coding, I also occasionally enjoy writing blog articles and making videos about code. My blog can be found <a href="https://strictlywebdev.com/blog/" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">HERE</a> and my YouTube videos <a href="https://www.youtube.com/@strictlywebdev" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">HERE</a>. Please feel free to review my projects below and be sure to read the README.md file for each project on my GitHub for detailed description and testing information. Lastly, feel free to reach out should you have any questions or professional inquiries!
                </div>
            </div>
        </div>
      </section>


      {/* SKILLS SECTION */}
      <section className="skills-section relative py-52 flex flex-col justify-center bg-[url('/images/skills_bg.jpg')]">

        <div className="flex flex-col gap-3 bg-sky-800 text-gray-50 text-center py-3 absolute top-[0] -translate-y-[50%] w-full" id="skills">
            <h4 className="text-3xl">SKILLS</h4>
            <p className="text-[0.9rem]">Some technologies I have worked with</p>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className={`grid grid-cols-2 md:grid-cols-4 place-items-center gap-16 px-5 md:px-8 xl:px-24 skills-list`}>
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
      <section className="projects-section relative py-52 flex flex-col justify-center bg-gray-50">

        <div className="flex flex-col gap-3 bg-sky-800 text-gray-50 text-center py-3 absolute top-[0] -translate-y-[50%] w-full" id="projects">
            <h4 className="text-3xl">PROJECTS</h4>
            <p className="text-[0.9rem]">A few of my projects</p>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-row flex-wrap justify-center gap-20 px-5 lg:px-8 xl:px-18">
            {projectsArray && 
                projectsArray.map((project, id) => (
                    <ProjectCard
                        key={id}
                        src={project.src}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                        live={project.liveUrl}
                        video={project.video}
                        github={project.githubUrl}
                    />
                ))
            }
        </motion.div>
      </section>


      {/* CONTACT SECTION */}
      <section className="contact-section relative py-52 flex flex-col justify-center bg-[url('/images/contact_bg.jpg')]">

        <div className="flex flex-col gap-3 bg-sky-800 text-gray-50 text-center py-3 absolute top-[0] -translate-y-[50%] w-full" id="contact">
            <h4 className="text-3xl">CONTACT ME</h4>
            <p className="text-[0.9rem]">Let&apos;s get in touch!</p>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className={`flex justify-center contact-form px-5 lg:px-20 xl:px-48`}>
              <ContactForm />
        </motion.div>
      </section>

      <footer className="h-12 grid place-items-center bg-gray-950 text-gray-50 text-sm">
          &copy; {year}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Taras Terry Babyuk&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Strictly Web Dev
      </footer>

    </main>
  )
}
