import React, {Component} from "react"

/**
 * props
 * 1.只读对象
 * 2.可以传递任意对象
 * (数字、字符串、布尔值、数组、对象、函数、JSX模版)
 */

function ChildFunProps(props) {
	return <div>{props.msg}</div>
}

export class ChildClassProps extends Component {
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
				<ChildClassProps msg={this.state.msg} />
				<ChildFunProps msg={this.state.msg} />
			</>
		)
	}
}

export default Props
