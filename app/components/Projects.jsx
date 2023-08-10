
import { projectsArray } from "../data/portfolioData"
import { ProjectCard } from "./ProjectCard"


export const Projects = () => {

    console.log("from Projects:", "hello world")
    
  return (
    <section className="projects-section py-28 flex flex-col justify-center bg-gray-50" id="projects">

            <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-700 pb-20">             
                <div className="flex flex-col gap-3">
                    <h4 className="text-3xl">PROJECTS</h4>
                    <p>A few of my projects</p>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-20 px-5 lg:px-8 xl:px-18">
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

            </div>
    </section>
  )
}