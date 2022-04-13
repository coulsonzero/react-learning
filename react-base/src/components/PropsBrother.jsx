/**
 * 兄弟组件通信: 通过子传父，再父传子的方法实现
 */

import React, {useState, Component} from "react"

const SonA = (props) => {
	return <div>{props.message}</div>
}

const SonB = (props) => {
	const [username, setUsername] = useState("")
	function handleInput(e) {
		setUsername((username) => e.target.value)
	}
	function handleClick() {
        props.getMsg(username)
	}
	return (
		<>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={handleInput}
			/>
			<button onClick={handleClick}>Click</button>
		</>
	)
}

export class PropsBrother extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "",
		}
	}

	getMsg = (msg) => {
		// console.log(msg)
		this.setState({
			message: msg,
		})
	}

	render() {
		return (
			<>
				<SonB getMsg={this.getMsg} />
				<SonA message={this.state.message} />
			</>
		)
	}
}

export default PropsBrother
