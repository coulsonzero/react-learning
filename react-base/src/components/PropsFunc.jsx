/**
 * 子传父：通过调用props回调函数传递参数到父组件
 */

import React, {useState, Component} from "react"

function ChildFuncFunc(props) {
	const [username, setUsername] = useState("")
	function handleInput(e) {
		setUsername((username) => e.target.value)
	}
	function handleClick() {
		// console.log(username)
		props.getName(username)
	}
	return (
		<>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={handleInput}
			/>
			<button onClick={handleClick}>Add</button>
			<p>{username}</p>
		</>
	)
}

class ChildClassFunc extends Component {
	constructor(props) {
		super(props)
		this.state = {username: ""}
	}

	handleInput = (e) => {
		this.setState({username: e.target.value})
	}

	handleClick = () => {
		// console.log(this.state.username)
		this.props.getName(this.state.username)
	}

	render() {
		return (
			<>
				<input
					type="text"
					placeholder="username"
					value={this.state.username}
					onChange={this.handleInput}
				/>
				<button onClick={this.handleClick}>Add</button>
				<p>{this.state.username}</p>
			</>
		)
	}
}

export class PropsFunc extends Component {
	state = {
		links: ["Home", "About", "Docs"],
	}

	getName = (v) => {
		this.setState({links: [...this.state.links, v]})
		// this.state.links.forEach((item) => console.log(item))
	}

	render() {
		return (
			<>
				<ChildFuncFunc list={this.state.links} getName={this.getName} />
				<ChildClassFunc list={this.state.links} getName={this.getName} />
			</>
		)
	}
}

export default PropsFunc
