"use client"

import { useState } from "react"

export const ContactForm = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const contactObject = {name, email, message}

    console.log("contact object:", contactObject)

    setSuccess(false)
    setError(false)
    setSending(true)

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactObject)
    }
    )

    if(res.ok) {
        const data = await res.json()
        console.log("form sent successfully!", data)
        setSuccess(true)
    }

    if(!res.ok) {
        const {error} = await res.json()
        console.log("form failed to send", error)
        setError(true)
    }

  }

  return (
        <>
        {!success && !error && (
            <form className="flex flex-col w-[500px]" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="your name" className="py-2 ps-3 rounded mb-7" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="email" name="email" placeholder="your email" className="py-2 ps-3 rounded mb-7" onChange={(e) => setEmail(e.target.value)} value={email} />
            <textarea name="message" id="" cols="30" rows="5" placeholder="your message" className="py-2 ps-3 rounded mb-12" onChange={(e) => setMessage(e.target.value)} value={message} />
            <button className="rounded h-10 text-gray-50 bg-[#f09c6c] hover:bg-[#ec8346]" disabled={sending} >{sending ? "Sending...please wait..." : "SEND"}</button>
        </form>
        )}

        {success && (
            <p className="text-lg text-green-500">Form successfully submitted - thank you!</p>
        )}

        {error && (
            <p className="text-lg text-red-500">Oops, something went wrong when submitting your form. Please try again later!</p>
        )}
       </>
    )
}
