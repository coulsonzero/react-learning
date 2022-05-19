
import React from "react"

class PropsObject extends React.Component {
	state = {
		data: [
			{name: "Amazon", price: "-$5K"},
			{name: "Spotify", price: "-$50"},
			{name: "Netflix", price: "-$200"},
		],
	}
	render() {
		const dict = this.state.data.map((expense, index) => {
			return (
				<div className="expense" key={index} style={{display: "flex", gap: "10px"}}>
					<div className="expense__title">name: {expense.name}</div>
					<div className="expense__price">price: ${expense.price}</div>
				</div>
			)
		})

		return <div>{dict}</div>
	}
}

export default PropsObject