/**
 * 跨组件通信：使用createContext， 解构成Provider传值, Consumer接受值
 */

import React, {createContext, Component} from "react"

const {Provider, Consumer} = createContext()

function ComA() {
	return (
        <>
            <div>ComA</div>
            <ComB />
        </>
    )
}

function ComB() {
	return (
		<div style={{color: 'red', display: 'flex', flexDirection: 'row'}}>
			<span>ComB: </span>
			<Consumer>{(value) => <div>{value}</div>}</Consumer>
		</div>
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
