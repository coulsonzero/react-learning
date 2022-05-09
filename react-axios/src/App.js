import logo from "./logo.svg"
import "./App.css"
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
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={handleClick}>Click Me</button>
			</header>
		</div>
	)
}

export default App
