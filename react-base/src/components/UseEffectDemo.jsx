import React, {useState, useEffect} from "react"

function UseEffectDemo() {
	const [count, setCount] = useState(0)

    
	return (
		<div>
			<div>Count: {count}</div>
			<button onClick={() => setCount(count + 1)}>Add</button>
		</div>
	)
}

export default UseEffectDemo
