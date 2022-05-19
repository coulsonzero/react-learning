import React, {Component} from "react"

export default class SetState extends Component {
	state = {
		count: 0,
	}

    handleClick = () => {
        /*
        // 异步
        this.setState({
            count: this.state.count + 1,
        })
        console.log(this.state.count)
        */

        // 同步
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1,
            })
            console.log(this.state.count)
        })
    }


	render() {
		return (
			<>
				<button onClick={this.handleClick}>Click me {this.state.count}</button>
			</>
		)
	}
}
