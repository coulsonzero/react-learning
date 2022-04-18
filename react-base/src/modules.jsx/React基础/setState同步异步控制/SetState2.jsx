import React, {Component} from "react"

export default class SetState2 extends Component {
	state = {
		data1: [],
		data2: [],
        count: 1
	}

	componentDidMount() {
        // console.log(this.state.count)

		this.setState({
            data1: ["a", "b"],
            data2: ["C"],
            count: this.state.count + this.props.num
        })
        setTimeout(() =>
            this.setState((state, props) => ({
                count: state.count + props.num,
            }))
        )
	}
	render() {
        const {data1, data2, count} = this.state
		return (
			<>
				<div>{data1}</div>
				<div>{data2}</div>
				<div>{count}</div>
			</>
		)
	}
}
