import React, {Component} from "react"

/**
 * props
 * 1.只读对象
 * 2.可以传递任意对象
 * (数字、字符串、布尔值、数组、对象、函数、JSX模版)
 */

function SonFunProps(props) {
	return <div>{props.msg}</div>
}

export class SonClassProps extends Component {
	render() {
		return <div>{this.props.msg}</div>
	}
}

export class Props extends Component {
	state = {
		msg: "hello, props...",
	}

	render() {
		return (
			<>
				<SonClassProps msg={this.state.msg} />
				<SonFunProps msg={this.state.msg} />
			</>
		)
	}
}

export default Props
