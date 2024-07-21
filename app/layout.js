import './globals.css'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const metadata = {
  title: "Terry Web Dev Portfolio",
  description: "A full-stack web developer specializing in the Front End. Website and web app design and development services in Toronto, the GTA, and remotely!",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Terry Web Dev Portfolio",
      description: "A full-stack web developer specializing in the Front End. Website and web app design and development services in Toronto, the GTA, and remotely!",
      url: "https://www.terrywebdev.com/",
      siteName: "Terry Web Dev",
      locale: "en_US",
      type: "website",
      images: [    
          {
              url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fterry_web_dev_og_image.jpg?alt=media&token=8f8e5103-a7a6-46f1-a069-93c2708a2969",
              width: 1200,
              height: 628,
              type: "image/jpeg"
          }
      ],
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
        <body className="bg-gray-50">
          <Navbar />
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  )
}
