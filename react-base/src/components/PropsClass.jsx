import React from "react"

class ChildClass extends React.Component {
    componentDidUpdate() {
        console.log(this.props.count)
    }

	render() {
		return (
			<>
				<div>Count: {this.props.count}</div>
                <button onClick={this.props.handleClick}>+</button>
                <button onClick={this.props.handleClick2}>+</button>
			</>
		)
	}
}

class PropsClass extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	handleClick2 = () => {
		this.setState((state) => ({
            count: state.count + 1
        }))
	}

	render() {
		return (
			<>
				<ChildClass count={this.state.count} handleClick={this.handleClick} handleClick2={this.handleClick2} />
			</>
		)
	}
}
export default PropsClass
