import React from "react"
import {flushSync} from 'react-dom'

class SetStateDemo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			version: React.version
		}
	}

    componentDidMount() {
        console.log("react version: " + React.version)
        document.getElementById("btn").addEventListener("click", this.changeCount, false)
    }

    componentDidUpdate() {
        console.log("update count: " + this.state.count)
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })

        console.log("state: " + this.state.count)
    }


	changeCountWithSetTimeout = () => {
        setTimeout(() => {
            this.changeCount()
        }, 0)
	}

    changeCountWithPromise = () => {
        Promise.resolve().then(() => {
            this.changeCount()
        })
    }

	changeCountWithFlushSync = () => {
		flushSync(() => {
			this.changeCount()
		})
	}

	render() {
        console.log("render count: " + this.state.count)
		return (
			<div>
				<h3>SetStateDemo: {this.state.version}</h3>
				<div>count: {this.state.count}</div>

				<button onClick={this.changeCount}>setState事件</button>
				<br />
				<button onClick={this.changeCountWithSetTimeout}>setTimeout合成事件</button>
                <br />
				<button onClick={this.changeCountWithPromise}>setPromise合成事件</button>
				<br />
				<button onClick={this.changeCountWithFlushSync}>flushSync合成事件</button>
				<br />
				<button id="btn">原生合成事件</button>
			</div>
		)
	}
}

export default SetStateDemo