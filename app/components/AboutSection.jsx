import { BiSolidFilePdf } from "react-icons/bi"



export const AboutSection = () => {

  return (
        <section className="relative home-section-padding flex flex-col justify-center bg-[url('/images/bg_light.jpg')] bg-center bg-cover">
            <a href="/terry_web_dev_2024_sm.pdf" className="absolute flex items-center bottom-14 right-14 py-3 px-4 bg-[#f09c6c] hover:bg-[#ec8346] rounded text-gray-50" download><BiSolidFilePdf />&nbsp;RESUME</a>
            <div className="home-section-heading" id="about">
                <h4 className="text-3xl">ABOUT ME</h4>
                <p className="text-[0.9rem]">A bit about me and my work</p>
            </div>
            <div className="flex flex-col lg:flex-row px-5 sm:px-12 md:px-20 lg:px-20 xl:px-48">
                <div className="mb-16 lg:mb-0 grid place-items-center lg:me-10 xl:me-20">
                <img 
                    src="/images/terry_didi.jpg"
                    alt="photo of Terry" 
                    style={{maxWidth: "200px"}}
                    className="rounded-lg"  
                />
                </div>
                <div className={`flex items-center`}>
                    <div className="leading-9">
                        Welcome and thank you for visiting my portfolio page! My name is Terry and I am a full-stack web developer specializing in the Front End. Most of my experience thus far has been with React and the MERN stack. I love the creative process involved in web development and the challenge that comes with bringing an idea to life through code. I hope you enjoy reviewing some of my work below and please feel free to reach out should you have any questions or professional inquiries!
                    </div>
                </div>
            </div>
        </section>
    )
}
