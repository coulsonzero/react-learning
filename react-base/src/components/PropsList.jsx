import React, {Component} from "react"

function ChildFuncList(props) {
	const list = props.list.map((item, index) => <li key={index}>{item}</li>)
	return <ul>{list}</ul>
}

class ChildClassList extends Component {
	list = this.props.list.map((item, index) => <li key={index}>{item}</li>)

	/*
	constructor(props) {
		super(props)
		this.list = this.props.list.map((item, index) => (
			<li key={index}>{item}</li>
		))
	}
    */

	render() {
		return <ul>{this.list}</ul>
	}
}


export class PropsList extends Component {
	state = {
		links: ["Home", "About", "Docs"],
	}
	render() {
		return (
			<>
				<ChildClassList list={this.state.links} />
				<ChildFuncList list={this.state.links} />
			</>
		)
	}
}

export default PropsList
