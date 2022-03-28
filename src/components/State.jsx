import React from 'react';

class State extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    // 会在组件挂载后（插入 DOM 树中）立即调用, 如需通过网络请求获取数据，此处是实例化请求的好地方
    componentDidMount() {
        this.setState({
            count: 5
        })
    }

    // 加载时不触发，每次更新触发
    componentDidUpdate () {
        alert(this.state.count)
    }

    // 在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作,
    // 例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等
    componentWillUnmount = () => this.state.count = 0

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return ( 
            <div>
                <p>{this.state.count}</p> 
                <button onClick={this.increment}>+</button> 
            </div>
        )
    }
}

export default State;