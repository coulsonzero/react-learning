import React from "react"
import './App.css'
import MyTable from "./components/ScrollTable"

class App extends React.Component {
	render() {
		return (
			<>
				<div>TableDemo: </div>
				<MyTable />
			</>
		)
	}
}

export default App
