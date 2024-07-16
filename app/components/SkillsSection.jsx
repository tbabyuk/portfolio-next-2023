import { skillsArray } from "../data/portfolioData"
import { motion } from "framer-motion"
import Image from "next/image"



export const SkillsSection = () => {

  return (
      <section className="relative home-section-padding flex flex-col justify-center bg-[url('/images/bg_dark.jpg')] bg-center bg-cover">
            <div className="home-section-heading" id="skills">
                <h4 className="text-3xl">SKILLS</h4>
                <p className="text-[0.9rem]">Technologies I have worked with</p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-16 px-5 md:px-8 xl:px-24 skills-list">
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
                        className="hover:rotate-6 transition ease-in-out"
                    />
                ))}
            </motion.div>
        </section>
    )
}