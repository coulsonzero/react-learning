import React, {Component} from "react"

function ChildFuncObejct(props) {
	const dict = props.data.map((expense) => {
		return (
			<div className="expense">
				<div className="expense__title">name: {expense.name}</div>
				<div className="expense__price">price: ${expense.price}</div>
			</div>
		)
	})

	return (
		<>
			<div className="expense__constainer">{dict}</div>
		</>
	)
}

class ChildClassObject extends Component {
	constructor(props) {
		super(props)
		this.dict = this.props.data.map((expense) => {
			return (
				<div className="expense">
					<div className="expense__title">name: {expense.name}</div>
					<div className="expense__price">price: ${expense.price}</div>
				</div>
			)
		})
	}

	render() {
		return <div className="expense__constainer">{this.dict}</div>
	}
}

export class PropsObject extends Component {
	state = {
		links: ["Home", "About", "Docs"],
		data: [
			{name: "Amazon", price: "-$5K"},
			{name: "Spotify", price: "-$50"},
			{name: "Netflix", price: "-$200"},
		],
	}
	render() {
		return (
			<>
				<ChildFuncObejct data={this.state.data} />
				<br />
				<ChildClassObject data={this.state.data} />
			</>
		)
	}
}

export default PropsObject
