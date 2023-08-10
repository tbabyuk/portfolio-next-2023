
import { skillsArray } from "../data/portfolioData"
import Image from "next/image"


export const Skills = () => {
    
  return (
    <section className="skills-section py-28 flex flex-col justify-center bg-[url('/images/skills_bg.jpg')]" id="skills">

            <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-50 pb-20">             
                <div className="flex flex-col gap-3">
                    <h4 className="text-3xl">SKILLS</h4>
                    <p>Some technologies I have worked with</p>
                </div>
            </div>

            <div className="grid grid-cols-4 place-items-center gap-16 px-5 lg:px-8 xl:px-24">
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
            </div>
    </section>
  )
}