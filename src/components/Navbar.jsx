import React from 'react';

class Navbar extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1})
    }

    // 加载后修改初始化默认值
    componentDidMount = () => this.state.counter = 3

    // 加载时不触发，每次更新触发
    componentDidUpdate = () => alert("Counter: " + this.state.counter)

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Navbar;