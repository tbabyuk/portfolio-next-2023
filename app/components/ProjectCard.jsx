import Image from "next/image"
import Link from "next/link"
import { useTheme } from "../context/ThemeContextProvider"

export const ProjectCard = ({src, alt, live, video, github, title, description}) => {

  const {isDarkTheme} = useTheme()



  return (
    <div className="flex flex-col rounded-md overflow-hidden w-auto md:w-[330px] shadow-md bg-gray-50">
        <Link href={live} target="_blank">
            <div className="overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width="400"
                    height="200"
                    quality={100}
                    className="card-image"
                />
            </div>
        </Link>
        <div className="">
            <div className="text-center py-6">
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
            <div className="flex justify-evenly pb-6">
                <Link href={live} target="_blank"><button className="card-button">Live</button></Link>
                <Link href={video} target="_blank"><button className="card-button">Video</button></Link>
                <Link href={github} target="_blank"><button className="card-button">GitHub</button></Link>
            </div>
        </div>
    </div>  
  )
}