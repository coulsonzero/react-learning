import React, {useEffect} from "react"

export default function FetchEffect() {
	function fetchData() {
		fetch("http://geek.itheima.net/v1_0/channels")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(`Could not get data: ${error}`)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <div>FetchEffect</div>
}
