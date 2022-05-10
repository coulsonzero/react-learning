import React from "react"

import { ThemeContext } from "./msgContent"

export class CreateContentDemo extends React.Component {
	state = {
		message: "hello CreateContent!"
	}


	render() {
		return (
			<ThemeContext.Provider value={this.state.message}>
				<div>CreateContentDemo</div>
			</ThemeContext.Provider>
		)
	}
}

export default CreateContentDemo
