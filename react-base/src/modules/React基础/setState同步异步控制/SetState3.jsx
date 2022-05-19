import React, { Component } from 'react'

class SetState3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        // this.setState({count: this.state.count + 1})
        this.state.count = 5
        console.log(this.state.count)
    }


    render () {
        let res = 10
        console.log("render: ", this.state.count)

        return (
            <div>
                <div>SetState3: {res}</div>
                <span>{this.state.count}</span>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
            </div>
        )
    }
}

export default SetState3