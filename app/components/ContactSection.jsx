import { motion } from "framer-motion"
import { ContactForm } from "./ContactForm"


export const ContactSection = () => {


  return (
        <section className="contact-section relative py-52 flex flex-col justify-center bg-[url('/images/contact_bg.jpg')]">
            <div className="flex flex-col gap-3 bg-sky-800 text-gray-50 text-center py-3 absolute top-[0] -translate-y-[50%] w-full" id="contact">
                <h4 className="text-3xl">CONTACT ME</h4>
                <p className="text-[0.9rem]">Let&apos;s get in touch!</p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}
                className={`flex justify-center contact-form px-5 lg:px-20 xl:px-48`}>
                <ContactForm />
            </motion.div>
        </section>
    )
}
