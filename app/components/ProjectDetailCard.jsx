"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';


export const ProjectDetailCard = ({project}) => {

    return (
        <div className="grid lg:grid-cols-2 bg-black px-5 lg:px-10 py-10" id="project-title">
            <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
        
            className="text-gray-200 grid grid-cols-2 mb-8 lg:mb-0">
                {/* title container */}
                <div className="col-span-2 mb-8 rounded-2xl tb-bento-box">
                <h1 className="text-2xl italic md:text-3xl border-b-2 border-white/20 pb-2 mb-2">{project.title}</h1>
                <h2 className="text-white/50 italic text-lg md:text-xl">A web app for a music school business</h2>
                </div>
    
                {/* features container */}
                <div className="col-span-2 mb-8 tb-bento-box">
                <h3 className="font-semibold pb-4">MAIN FEATURES:</h3>
                <ul className="font-light list-disc list-inside flex gap-4 flex-wrap">
                    {project.features.map((feature, index) => (
                        <li key={index} className="">{feature}</li>
                    ))}
                </ul>
                {/* <ul className="font-light list-disc list-inside space-y-3">
                    {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul> */}
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
                <p className="font-light">{project.longDescription}</p>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}       
            className="lg:px-10"> 
                <img src={project.src} alt="project image" className="rounded-t-lg" />
                <div className="tb-bento-box-2 flex flex-col gap-y-5 sm:flex-row justify-evenly py-10">
                    <Link href={project.liveUrl}><button className="card-button w-full sm:w-[100px]">Live</button></Link>
                    <Link href={project.videoUrl}><button className="card-button w-full sm:w-[100px]">Video</button></Link>
                    <Link href={project.githubUrl}><button className="card-button w-full sm:w-[100px]">GitHub</button></Link>
                </div>
            </motion.div>
        </div>
    )

}