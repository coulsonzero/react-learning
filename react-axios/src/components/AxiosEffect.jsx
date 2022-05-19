import React, {useEffect} from 'react'
import axios from 'axios'


export default function AxiosEffect() {
	async function fetchData() {
		const res = await axios.get("http://geek.itheima.net/v1_0/channels")
		console.log(res)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <div>axiosDemo</div>
}
