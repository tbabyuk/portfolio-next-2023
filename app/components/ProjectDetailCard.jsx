"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';



export const ProjectDetailCard = ({project}) => {

    return (
        <div className="grid py-20 lg:grid-cols-2 px-5 lg:px-10 bg-[url('/images/bg_dark.jpg')] bg-center bg-cover" id="project-title">
            <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-gray-200 grid grid-cols-2 mb-8 lg:mb-0">
                {/* title container */}
                <div className="col-span-2 mb-8 rounded-2xl tb-bento-box">
                    <h1 className="text-2xl md:text-3xl border-b-2 border-white/20 pb-2 mb-2">{project.title}</h1>
                    <h2 className="text-white/50 italic text-lg md:text-xl">{project.shortDescription}</h2>
                </div>
    
                {/* features container */}
                <div className="col-span-2 mb-8 tb-bento-box">
                    <h3 className="font-semibold pb-4">MAIN FEATURES:</h3>
                    <ul className="font-light list-disc list-inside flex flex-col sm:flex-row flex-wrap gap-4">
                        {project.features.map((feature, index) => (
                            <li key={index} className="">{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* tech container */}
                <div className="col-span-2 grid grid-cols-2 mb-8 tb-bento-box">
                    <div className="col-span-2 md:col-span-1 mb-10 md:mb-0">
                        <h3 className="font-semibold pb-4">TECHNOLOGIES:</h3>
                        <ul className="font-light list-disc list-inside space-y-3">
                            {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1 grid grid-cols-2 place-items-center gap-4">
                        {project.techIconsArray.map((icon, index) => (
                        <img key={index} src={icon} width="100px" className="p-3 bg-white/5 shadow-inner shadow-white/10 rounded-md" />
                        ))}
                    </div>
                </div>
                {/* description container */}
                <div className="col-span-2 rounded-2xl tb-bento-box">
                    <h3 className="font-semibold pb-4">DESCRIPTION:</h3>
                    <p className="font-light leading-7">{project.longDescription}</p>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}       
            className="lg:px-10"> 
                <img src={project.src} alt="project image" className="rounded-t-lg" />
                <div className="flex flex-col gap-y-5 sm:flex-row justify-evenly py-10 mb-8 tb-bento-box-2">
                    <Link href={project.liveUrl} target="_blank"><button className="card-button w-full sm:w-[100px]">Live</button></Link>
                    {/* <Link href={project.videoUrl} target="_blank"><button className="card-button w-full sm:w-[100px]">Video</button></Link> */}
                    <Link href={project.githubUrl} target="_blank"><button className="card-button w-full sm:w-[100px]">GitHub</button></Link>
                </div>
                { project.loginInfo && (
                    <div className="col-span-2 mb-8 rounded-2xl tb-bento-box">
                        <h3 className="font-semibold pb-4">TESTING / DEMO LOGIN:</h3>
                        <p className="font-light" dangerouslySetInnerHTML={{ __html: project.loginInfo }}></p>
                    </div>
                    )
                }
            </motion.div>
        </div>
    )

}

// dangerouslySetInnerHTML={{ __html: htmlString }}