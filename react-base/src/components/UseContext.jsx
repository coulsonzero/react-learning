import React, {useState, createContext, useContext} from "react"

const numContext = createContext()

function Sub() {
	const {num, childFun} = useContext(numContext)
	return (
		<>
			<div>{num}</div>
			<button onClick={() => childFun(2)}>+</button>
		</>
	)
}

function Father() {
	return <Sub />
}

export default function UseContext() {
	const [num, setNum] = useState(1)
	function childFun(n) {
		setNum(num + n)
	}
	return (
		<numContext.Provider value={{num, childFun}}>
			<Father />
		</numContext.Provider>
	)
}
