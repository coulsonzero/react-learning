import React from "react"

import { ThemeContext } from './msgContent'

const UseContentDemo = () => {
	return (
		<>
			<div>useContentDemo: </div>
			<ThemeContext.Consumer>{(value) => <div>{value}</div>}</ThemeContext.Consumer>
		</>
	)
}

export default UseContentDemo
