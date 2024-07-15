import Image from "next/image"
import Link from "next/link"
import { useTheme } from "../context/ThemeContextProvider"

export const ProjectCard = ({project}) => {

  const {isDarkTheme} = useTheme()

  const {title, shortDescription, src, alt, url, liveUrl, video, githubUrl} = project;


  return (
    <div className="flex flex-col rounded-md overflow-hidden w-auto md:w-[330px] shadow-md bg-gray-50 card-box">
        <Link href={`/project/${url}#project-title`}>
            <div className="overflow-hidden">
                <img src={src} alt={alt} />
            </div>
        </Link>
        <div className="">
            <div className="text-center py-6 border-t-2 border-gray-200 text-gray-800">
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                <p className="text-sm">{shortDescription}</p>
            </div>
        </div>
    </div>  
  )
}