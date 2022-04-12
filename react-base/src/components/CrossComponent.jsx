import React, {createContext, Component} from "react"

const {Provider, Consumer} = createContext()

function ComA() {
	return <ComB />
}

function ComB() {
	return (
        <Consumer>
            {(value) => <div>{value}</div>}
        </Consumer>
    )
}

class CrossComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "test"
        }
    }

	render() {
		return (
            <Provider value={this.state.message}>
                <ComA />
            </Provider>
        )
	}
}

export default CrossComponent
