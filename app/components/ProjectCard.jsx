import Link from "next/link"



export const ProjectCard = ({project}) => {

  const {title, shortDescription, src, alt, url, liveUrl, video, githubUrl} = project;


  return (
    <Link href={`/project/${url}#project-title`} className="flex flex-col rounded-md overflow-hidden w-auto md:w-[330px] shadow-md bg-gray-50 card-box">
            <div className="overflow-hidden">
                <img src={src} alt={alt} />
            </div>
        <div className="">
            <div className="text-center py-6 border-t-2 border-gray-200 text-gray-800">
                <h2 className="text-[22px] font-semibold mb-3">{title}</h2>
                <p className="text-sm">{shortDescription}</p>
            </div>
        </div>
    </Link>  
  )
}