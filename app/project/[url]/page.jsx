
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
    <div className="grid grid-cols-2 bg-gray-800 px-5 lg:px-10 py-10">
      <div className="text-white grid grid-cols-2">
          <div className="col-span-2">
            <h1 className="text-2xl mb-1">{project.title}</h1>
            <h2 className="text-white/70 italic text-xl border-b-2 border-white/30 pb-8 mb-8">A web app for a music school business</h2>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold pb-2">TECHNOLOGIES:</h3>
              <ul className=" font-light list-disc list-inside space-y-3">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
          </div>
          <div className="col-span-1 flex flex-wrap items-center justify-center gap-3">
            {project.techIconsArray.map((icon, index) => (
              <img key={index} src={icon} width="80px" />
            ))}
          </div>
          <div className="col-span-2 border-t-2 border-white/30 pt-8 mt-8">
            <h3 className="font-semibold pb-2">DESCRIPTION:</h3>
            <p className="font-light">{project.longDescription}</p>
          </div>
      </div>
      <div style={{backgroundImage: `url(${project.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} />
    </div>
  )
}

export default projectDetailPage;