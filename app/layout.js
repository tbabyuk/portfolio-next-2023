import './globals.css'
import { Navbar } from './components/Navbar'
import Header from './components/Header'

export const metadata = {
  title: 'Terry Portfolio',
  description: 'Terry Babyuk Web Development Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
