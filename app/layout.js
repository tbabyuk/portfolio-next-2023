import './globals.css'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ThemeContextProvider } from './context/ThemeContextProvider'

export const metadata = {
  title: 'Terry Portfolio',
  description: 'Terry Babyuk Web Development Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeContextProvider>
        <body className="bg-gray-50">
          <Navbar />
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeContextProvider>
    </html>
  )
}
