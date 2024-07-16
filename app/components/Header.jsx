"use client"

import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsGithub, BsLinkedin } from "react-icons/bs"
// import ReactSwitch from "react-switch"


export const Header = () => {

  return (
        <header className="h-[100vh] pt-20 pb-12 relative bg-[url('/images/header_bg.jpg')] bg-center bg-cover">
            {/* <div className="absolute top-20 left-5">
                <ReactSwitch
                    checked={isDarkTheme}
                    onChange={() => setIsDarkTheme(!isDarkTheme)}
                    onHandleColor="#222222"
                    offHandleColor="#F9FAFB"
                    onColor="#F9FAFB"
                    offColor="#222222"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
            </div> */}
            <div className="absolute top-16 right-5">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="flex absolute top-4 right-4">
                    <a href="https://www.linkedin.com/in/taras-terry-babyuk/" target="_blank"><BsLinkedin className="mb-4 text-4xl text-gray-300 opacity-70" /></a>
                    <a href="https://github.com/tbabyuk" target="_blank"><BsGithub className="text-4xl text-gray-300 opacity-70 ms-3" /></a>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-5 lg:grid-cols-4 w-full h-full">
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="grid place-items-center md:justify-end md:col-span-3 lg:col-span-2 skew-y-2">
                    <div className="flex flex-col space-y-4 px-8 mt-10 md:gap-5 lg:gap-8 md:mt-0 text-gray-100">
                        <h2 className="text-5xl md:text-5xl xl:text-6xl font-light">Hi, I&apos;m Terry</h2>
                        <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold">A Front-End Developer</h3>
                        <h4 className="text-2xl md:text-2xl font-thin italic">...with a passion for everything web!</h4>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="grid place-items-center md:col-span-2 lg:col-span-2 skew-y-2">
                    <div className="header-right mb-10 md:mb-0 text-5xl md:text-3xl xl:text-4xl text-gray-100">
                    <Typewriter 
                            options={{
                            strings: ["HTML/CSS", "Bootstrap", "Tailwind", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Firebase", "Wordpress", "Clerk", "NextAuth", "Stripe", "OpenAI", "GitHub"],
                            autoStart: true,
                            loop: true,
                            }}
                        />                
                    </div>
                </motion.div>
            </div>
        </header>
    )
}
