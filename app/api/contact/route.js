
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"


export async function POST(request) {

    const {name, email, message} = await request.json()


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.EMAIL_SECRET_PASS
        }
        })
    
    
        const mailOptions = {
            from: "terry@strictlywebdev.com",
            to: "terry@strictlywebdev.com",
            subject: "New Portfolio Contact",
            html: `
            <strong>Name:</strong><br />
            <small>${name}</small>
            <hr>
            <strong>Email:</strong><br />
            <small>${email}</small>
            <hr>
            <strong>Message:</strong><br />
            <small>${message}</small>
            `
        }

        try {
            await transporter.sendMail(mailOptions)
            return NextResponse.json({message: "email sent successfully"}, {status: 200})
        } catch (error) {
            console.error("error sending email:", error)
            return NextResponse.json({message: "email failed to send", error: error}, {status: 500})
        }

}