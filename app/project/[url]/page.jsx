
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
    <div className="h-[600px] grid place-items-center bg-gray-800 px-10">
      <div className="card md:card-side glass h-[70%]">
        <figure className="max-w-[40%] p-2">
          <img
            src={project.src}
            alt="Movie"
            className="rounded-md" 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions flex-col items-center md:flex-row md:justify-evenly">
            <button className="btn btn-primary w-[140px]">Live</button>
            <button className="btn btn-primary w-[140px]">Video</button>
            <button className="btn btn-primary w-[140px]">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projectDetailPage;