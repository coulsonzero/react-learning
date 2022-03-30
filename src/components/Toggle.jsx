import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        };

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            // 为了能在这里使用 this.handleClick调用方法，因此需要在构造函数内添加handleChick属性指向回调方法 ？
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle