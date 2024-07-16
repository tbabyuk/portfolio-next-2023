import { motion } from "framer-motion"
import { projectsArray } from "../data/portfolioData"
import { ProjectCard } from "./ProjectCard"



export const ProjectsSection = () => {

  return (
        <section className="relative home-section-padding flex flex-col justify-center bg-[url('/images/bg_light.jpg')] bg-center bg-cover">
            <div className="home-section-heading" id="projects">
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

