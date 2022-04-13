/**
 * 跨组件通信：使用createContext， 解构成Provider传值, Consumer接受值
 */

import React, {createContext, useContext, Component} from "react"

const context = createContext()

function ComA() {
	return (
		<>
			<div>ComA</div>
			<ComB />
		</>
	)
}

function ComB() {
    const msg = useContext(context)
	return (
		<div>
			<span>ComB: {msg}</span>
		</div>
	)
}

class CrosscomUsecontext extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "hello",
		}
	}

	render() {
		return (
			<context.Provider value={this.state.message}>
				<ComA />
			</context.Provider>
		)
	}
}

export default CrosscomUsecontext
