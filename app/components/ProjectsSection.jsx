import { motion } from "framer-motion"
import { projectsArray } from "../data/portfolioData"
import { ProjectCard } from "./ProjectCard"
import { useTheme } from "../context/ThemeContextProvider"



export const ProjectsSection = () => {

  const {isDarkTheme} = useTheme()


  return (
        <section className={`projects-section relative py-52 flex flex-col justify-center ${isDarkTheme ? "bg-gray-900" : "bg-gray-50"}`}>
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
                    projectsArray.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </motion.div>
        </section>
    )
}

