import React from "react"

function ComA(props) {
	return (
        <div>Children: {props.children}</div>
    )
}

export default class Children extends React.Component {
    getName = () => {
        console.log("hello, react-child")
    }
	render() {
		return (
			<ComA>
				<div>hello, react!</div>
				<a href="https://react.docschina.org"></a>
				<button onClick={this.getName}>Click</button>
			</ComA>
		)
	}
}
