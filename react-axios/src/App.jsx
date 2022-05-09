import React from "react"
import axios from "axios"

function App() {
	const handleClick = () => {
		console.log("====start====")
		let url = "http://localhost:8080/data"
		axios
			.get(url)
			.then(function (response) {
				let data = response.data
				console.log(JSON.stringify(data, null, 2))
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<>
			<button onClick={handleClick}>Click Me</button>
		</>
	)
}

export default App
