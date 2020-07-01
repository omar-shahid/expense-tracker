import React, { ReactNode, createContext, useContext, useReducer } from "react"

type ThemeOptions = "light" | "dark"

type ThemeContext = {
  theme: ThemeOptions
  dispatchTheme: (obj: { type: "toggle" }) => void
}

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

const reducer = (
  state: ThemeOptions,
  action: { type: "toggle" }
): ThemeOptions => {
  switch (action.type) {
    case "toggle":
      return state === "dark" ? "light" : "dark"

    default:
      return state
  }
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, dispatchTheme] = useReducer(reducer, "light")

  return (
    <ThemeContext.Provider value={{ theme, dispatchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
