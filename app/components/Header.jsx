"use client"

import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import ReactSwitch from "react-switch"
import { useTheme } from "../context/ThemeContextProvider"


export const Header = () => {

  const {isDarkTheme, setIsDarkTheme} = useTheme()

  return (
        <header className="h-[380px] relative">
            <div className="absolute top-5 left-5">
                <ReactSwitch
                    checked={isDarkTheme}
                    onChange={() => setIsDarkTheme(!isDarkTheme)}
                    onHandleColor="#22222"
                    offHandleColor="#F9FAFB"
                    onColor="#F9FAFB"
                    offColor="#22222"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="flex absolute top-4 right-4">
                <a href="https://www.linkedin.com/in/taras-terry-babyuk/" target="_blank"><BsLinkedin className="mb-4 text-4xl text-gray-300 opacity-70" /></a>
                <a href="https://github.com/tbabyuk" target="_blank"><BsGithub className="text-4xl text-gray-300 opacity-70 ms-3" /></a>
            </motion.div>

            <div className="header-content grid md:grid-cols-5 lg:grid-cols-4 w-full h-full bg-[url('/images/header_bg.jpg')] bg-center bg-cover">
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className={`grid place-items-center md:justify-end md:col-span-3 lg:col-span-2 skew-y-2`}>
                <div className="flex flex-col gap-3 mt-10 md:gap-5 lg:gap-8 md:mt-0 text-gray-100">
                    <h2 className="text-3xl md:text-5xl xl:text-6xl font-light">Hi, I&apos;m Terry</h2>
                    <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold">A Front-End Developer</h3>
                    <h4 className="text-xl md:text-2xl font-thin italic">...with a passion for everything web!</h4>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
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
    )
}
