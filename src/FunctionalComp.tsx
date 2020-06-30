import React from "react"
import { useTheme } from "./themeContext"

function FunctionalComp() {
  const { theme, setTheme } = useTheme()!

  return (
    <>
      <h1>Practicing Theme Context {theme}</h1>
      <button
        onClick={() => {
          setTheme({ type: "toggle" })
        }}
      >
        Button
      </button>
    </>
  )
}

export default FunctionalComp
