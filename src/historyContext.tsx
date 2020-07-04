import React, { ReactNode, createContext, useContext, useReducer } from "react"

type History = {
  description: string
  amount: number
  isExpense: boolean
}

type Payload = {
  description: string
  amount: number
}
type HistoryContextProps = {
  history: {
    income: number
    expense: number
    history: History[]
    availableIncome: number
  }
  dispatchHistory: (obj: { type: "addItem"; payload: Payload }) => void
}

type HistoryProviderProps = {
  children: ReactNode
}

const HistoryContext = createContext<HistoryContextProps | undefined>(undefined)

const reducer = (
  state: HistoryContextProps["history"],
  action: { type: "addItem"; payload: Payload }
): HistoryContextProps["history"] => {
  const { description, amount } = action.payload

  switch (action.type) {
    case "addItem":
      const isExpense = Math.sign(amount) === -1
      console.log(isExpense)
      const income = !isExpense ? state.income + amount : state.income
      const expense = isExpense ? state.expense - amount : state.expense
      const availableIncome = isExpense
        ? state.availableIncome - Math.abs(amount)
        : state.availableIncome + Math.abs(amount)

      const newObj = {
        description,
        amount,
        isExpense,
      }
      return {
        availableIncome,
        income,
        expense,
        history: [...state.history, newObj],
      }
    default:
      return state
  }
}

export function HistoryContextProvider({ children }: HistoryProviderProps) {
  const [history, dispatchHistory] = useReducer(reducer, {
    availableIncome: 0,
    income: 0,
    expense: 0,
    history: [],
  })

  return (
    <HistoryContext.Provider value={{ history, dispatchHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}

export const useHistory = (): HistoryContextProps => useContext(HistoryContext)!
