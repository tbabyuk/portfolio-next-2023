import { BiSolidFilePdf } from "react-icons/bi"
import { useTheme } from "../context/ThemeContextProvider"


export const AboutSection = () => {

  const {isDarkTheme} = useTheme()

  console.log("showing current theme:", isDarkTheme)

  return (
        <section className={`about-section relative pt-32 pb-44 flex flex-col justify-center ${!isDarkTheme ? "bg-gray-50" : "bg-gray-800"}`} id="about">
            <a href="/terry_web_dev_2023.pdf" className="absolute flex items-center top-5 right-5 py-3 px-4 bg-[#f09c6c] hover:bg-[#ec8346] rounded text-gray-50" download><BiSolidFilePdf />&nbsp;RESUME</a>
            <div className="flex flex-col lg:flex-row px-5 sm:px-12 md:px-20 lg:px-20 xl:px-48">
                <div className="mb-16 lg:mb-0 grid place-items-center lg:me-10 xl:me-20">
                <img 
                    src="/images/terry_didi_sm.jpg"
                    alt="photo of Terry" 
                    style={{maxWidth: "200px"}}
                    className="rounded-lg"  
                />
                </div>
                <div className={`flex items-center ${!isDarkTheme ? "text-gray-800" : "text-gray-200"}`}>
                    <div className="leading-9">
                        Welcome and thank you for visiting my portfolio page! My name is Terry and I am a Front End Developer focusing on JavaScript and React. I love the creative process involved in web development and the challenge that comes with bringing an idea to life through code. In addition to coding, I also occasionally enjoy writing blog articles and making videos about code. My blog can be found <a href="https://strictlywebdev.com/blog/" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">HERE</a> and my YouTube videos <a href="https://www.youtube.com/@strictlywebdev" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">HERE</a>. Please feel free to review my projects below and be sure to read the README.md file for each project on my GitHub for detailed description and testing information. Lastly, feel free to reach out should you have any questions or professional inquiries!
                    </div>
                </div>
            </div>
        </section>
    )
}
