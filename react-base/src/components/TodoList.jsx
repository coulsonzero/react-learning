import React from "react"

function ListItem({item, deleteItem}) {
	return (
		<div className="expense">
            <div className="expense__title">name: {item.name}</div>
            <div className="expense__price">price: ${item.price}</div>
            <button onClick={() => deleteItem(item.id)}>删除</button>
        </div>
	)
}

export class TodoList extends React.Component {
	state = {
		dict: [
			{id: 1, name: "Amazon", price: "-$5K"},
			{id: 2, name: "Spotify", price: "-$50"},
			{id: 3, name: "Netflix", price: "-$200"},
		],
	}

    deleteItem = (id) => {
        this.setState({
            dict: this.state.dict.filter(item => item.id !== id)
        })
    }

	render() {
		return (
			<div>
				{this.state.dict.map((item, index) => {
                    return <ListItem key={index} item={item} deleteItem={this.deleteItem}/>
                })}
			</div>
		)
	}
}

export default TodoList
