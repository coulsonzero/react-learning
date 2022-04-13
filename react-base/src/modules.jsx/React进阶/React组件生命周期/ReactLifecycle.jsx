import React from "react"

/**
 * 执行顺序: 自上而下
 *
 * 一、组件挂载阶段
 * constructor： 创建组件时最先执行,初始化只执行一次   1.初始化state 2.创建Ref 3.使用bind解决this指向问题
 * render： 每次组件渲染组会触发(渲染UI，不能在里面调用setState())
 * componentDidMount: 组件挂载后执行，初始化执行一次,子组件先执行  1.发送网络请求 2.DOM操作
 *
 * 二、组件更新阶段
 * render: 每次组件渲染都会执行
 * componentDidUpdate: 每次更新都会触发
 *
 * 三、组件卸载阶段
 * componentWillUnmount: 组件更新后卸载，执行清理工作，之后挂载componentDidMount
 */

class ChildCom extends React.Component {
    constructor(props) {
        super(props)
        this.timer = null
    }
	componentDidMount() {
		console.log("ChildCom componentDidMount")
        this.timer = setInterval(() =>{
            console.log("ChildCom Timer !")
        }, 1000)
	}
	componentDidUpdate() {
		console.log("ChildCom componentDidUpdate")
	}
	componentWillUnmount() {
		console.log("ChildCom componentWillUnmount")
        clearInterval(this.timer)
	}
	render() {
		return <div>ChildCom</div>
	}
}

class ReactLifecycle extends React.Component {
	constructor(props) {
		super(props)
		console.log("constructor")
        this.state = {
            count: 0,
            flag: true,
        }
        this.handleClick = this.handleClick.bind(this)
	}
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1,
            flag: !this.state.flag
        })
    }
	render() {
        console.log("render")
		return (
			<div>
				<h1>ReactLifecycle</h1>
				<button onClick={this.handleClick}>+</button>
				<p>{this.state.count}</p>
                {this.state.flag ? <ChildCom /> : null }
			</div>
		)
	}
}

export default ReactLifecycle
