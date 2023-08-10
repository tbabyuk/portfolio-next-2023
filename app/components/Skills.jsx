
import { skillsArray } from "../data/portfolioData"
import Image from "next/image"


export const Skills = () => {
    
  return (
    <section className="skills-section my-20" id="skills">

            <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-700 pb-8">             
                <div className="flex flex-col gap-3">
                    <h4 className="text-3xl">SKILLS</h4>
                    <p>Some technologies I have worked with</p>
                </div>
            </div>

            <div className="bg-[url('/images/skills_bg.jpg')] grid grid-cols-4 place-items-center gap-14 px-5 lg:px-8 xl:px-24 py-20">
                {skillsArray && 
                    skillsArray.map((skill) => (
                    <Image
                        key={skill.id}
                        src={skill.src}
                        alt={skill.alt}
                        width={100}
                        height={100}
                        quality={80}
                        title={skill.title}
                        className=" hover:rotate-6 transition ease-in-out"
                    />
                ))}
            </div>
    </section>
  )
}