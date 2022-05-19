import React, {useEffect} from "react"
import axios from "axios"

export default function AxiosEffect() {
	async function fetchData() {
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

	useEffect(() => {
		fetchData()
	}, [])

	return <div>AxiosEffect</div>
}
