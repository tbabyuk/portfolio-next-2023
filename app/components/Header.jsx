"use client"

import Typewriter from "typewriter-effect"


export const Header = () => {




  return (
    <header className="h-[400px] relative">
            {/* <div className="social-icons-container">
                <a href="https://www.linkedin.com/in/taras-terry-babyuk/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/tbabyuk" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
            </div> */}
        <div className="header-content grid md:grid-cols-5 lg:grid-cols-4 w-full h-full bg-[url('/images/header_bg.jpg')] bg-center bg-cover absolute top-[-30px] -skew-y-2 -z-20">

            <div className="grid place-items-center md:justify-end md:col-span-3 lg:col-span-2 skew-y-2">
                <div className="flex flex-col gap-3 mt-10 md:gap-5 lg:gap-8 md:mt-0 text-gray-100">
                    <h2 className="text-3xl md:text-5xl xl:text-6xl font-light">Hi, I'm Terry</h2>
                    <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold">A Front-End Developer</h3>
                    <h4 className="text-xl md:text-2xl font-thin italic">...with a passion for everything web!</h4>
                </div>
            </div>

            <div className="grid place-items-center md:col-span-2 lg:col-span-2 skew-y-2">
                <div className="header-right mb-10 md:mb-0 text-2xl md:text-3xl xl:text-4xl text-gray-100">
                <Typewriter 
                        options={{
                        strings: ["HTML/CSS", "Bootstrap", "Tailwind", "JavaScript", "React", "NextJS", "FireBase"],
                        autoStart: true,
                        loop: true,
                        }}
                    />                </div>
            </div>
        </div>  
    </header>
  )
}