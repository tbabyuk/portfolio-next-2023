

export const Contact = () => {
    return (
        <section className="about-section mt-20" id="contact">
  
              <div className="section-header px-5 lg:px-20 xl:px-48 text-gray-700 pb-8">             
                  <div className="flex flex-col gap-3">
                      <h4 className="text-3xl">CONTACT ME</h4>
                      <p>Let's get in touch!</p>
                  </div>
              </div>
  
              <div className="flex justify-center px-5 lg:px-20 xl:px-48 bg-[url('/images/contact_bg.jpg')] py-20">
                    <form className="flex flex-col w-[500px] p-5">
                        <input type="text" name="name" placeholder="your name" className="py-2 ps-3 rounded mb-7" />
                        <input type="email" name="email" placeholder="your email" className="py-2 ps-3 rounded mb-7" />
                        <textarea name="message" id="" cols="30" rows="5" placeholder="your message" className="py-2 ps-3 rounded mb-12" />
                        <button className="rounded h-10 text-gray-50 bg-sky-700 hover:bg-sky-800">Send!</button>
                    </form>
              </div>
        </section>
    )
  }