


export const About = () => {
  return (
      <section className="about-section py-28 flex flex-col justify-center bg-gray-50" id="about">

            <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-700 pb-20">             
                <div className="flex flex-col gap-3">
                    <h4 className="text-3xl">ABOUT ME</h4>
                    <p>A bit about who I am and what drives me</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row px-5 lg:px-20 xl:px-48">
                <div className="mb-16 lg:mb-0 grid place-items-center lg:me-10 xl:me-20">
                  <img src="/Terry.jpg" style={{maxWidth: "250px"}} className="rounded" />
                </div>
                <div className="flex items-center">
                      <div className="leading-8">
                        Welcome and thank you for visiting my portfolio page! My name is Terry and I am a Front End Developer focusing on JavaScript and React. I love the creative process involved in web development and the challenge that comes with bringing an idea to life through code. I also enjoy the learning process involved in web development and am always trying to improve and upgrade my skills. In addition to coding, I also occasionally enjoy writing blog articles and making videos about code. My blog can be found at <a href="https://strictlywebdev.com/blog/" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">strictlywebdev.com/blog/</a> and my YouTube videos at <a href="https://www.youtube.com/@strictlywebdev" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">youtube.com/@strictlywebdev</a>. Please feel free to browse some of my projects below and reach out should you have any questions or professional inquiries. Thank you again!
                      </div>
                </div>
            </div>
      </section>
  )
}