import React from "react"

function ChildFuncObejct(props) {
	const dict = props.data.map((expense, index) => {
		return (
			<div className="expense" key={index}>
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

class ChildClassObject extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dict: this.props.data.map((expense, index) => {
				return (
					<div className="expense" key={index} style={{display: "flex", gap: "10px"}}>
						<div className="expense__title">name: {expense.name}</div>
						<div className="expense__price">price: ${expense.price}</div>
						{/* <button>删除</button> */}
					</div>
				)
			})
		}
	}

	render() {
		return <div className="expense__constainer">{this.state.dict}</div>
	}
}

export class PropsObject extends React.Component {
	state = {
		links: ["Home", "About", "Docs"],
		data: [
			{name: "Amazon", price: "-$5K"},
			{name: "Spotify", price: "-$50"},
			{name: "Netflix", price: "-$200"}
		]
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
