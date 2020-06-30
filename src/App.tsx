import React from "react"
import { ThemeProvider } from "./themeContext"
import FunctionalComp from "./FunctionalComp"

function App() {
  return (
    <ThemeProvider>
      <FunctionalComp />
    </ThemeProvider>
  )
}

export default App
