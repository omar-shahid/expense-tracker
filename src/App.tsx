import React from "react"
import { HistoryContextProvider } from "./historyContext"
import FunctionalComp from "./FunctionalComp"

function App() {
	return (
		<HistoryContextProvider>
			<FunctionalComp />
		</HistoryContextProvider>
	)
}

export default App
