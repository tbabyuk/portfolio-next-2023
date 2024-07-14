
// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
import { projectsArray } from '@/app/data/portfolioData';


const fetchProject = async (url) => {
    const targetProject = projectsArray.find(project => project.url === url);
    return targetProject;
}



const projectDetailPage = async ({params}) => {



  const project = await fetchProject(params.url)


  console.log("logging project:", project.src)


  return (
    <div className="grid lg:grid-cols-2 bg-black px-5 lg:px-10 py-10">
      <div className="text-white grid grid-cols-2">
          {/* title container */}
          <div className="col-span-2 mb-8 p-10 rounded-2xl tb-box-gradient tb-inner-shadow">
            <h1 className="text-2xl italic md:text-3xl mb-1">{project.title}</h1>
            <h2 className="text-white/50 italic text-lg md:text-xl">A web app for a music school business</h2>
          </div>
          {/* tech container */}
          <div className="col-span-2 grid grid-cols-2 mb-8 p-10 rounded-2xl tb-box-gradient tb-inner-shadow">
            <div className="col-span-2 md:col-span-1 mb-10 md:mb-0">
              <h3 className="font-semibold pb-2">TECHNOLOGIES:</h3>
                <ul className=" font-light list-disc list-inside space-y-3">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
            </div>
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 place-items-center space-y-3">
              {project.techIconsArray.map((icon, index) => (
                <img key={index} src={icon} width="80px" />
              ))}
            </div>
          </div>
          {/* description container */}
          <div className="col-span-2 p-10 rounded-2xl tb-box-gradient tb-inner-shadow">
            <h3 className="font-semibold pb-2">DESCRIPTION:</h3>
            <p className="font-light">{project.longDescription}</p>
          </div>
      </div>
      <div className="p-10"> 
        <img src={project.src} alt="project image" className="rounded-lg" />
      </div>
    </div>
  )
}

export default projectDetailPage;