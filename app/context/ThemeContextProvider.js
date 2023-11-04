"use client"

import { useState, createContext, useContext } from "react"

const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)


  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
