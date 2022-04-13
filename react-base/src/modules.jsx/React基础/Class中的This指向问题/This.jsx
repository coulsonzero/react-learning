/**
 * class中使用this需注意指向this问题
 * 1. ES5语法this默认为undefined，需要使用bind(this)绑定到当前对象中
 * 2. ES6语法this默认指向当前对象
 */

import React, {Component} from "react"

export class This extends Component {
	/*
    handleClick() {
        console.log(this)  // undefined
    }
    */

	/*
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this)  // {Object, Object}
    }
    */

	handleClick = () => {
		console.log(this) // {Object, Object}
	}

	render() {
		return <button onClick={this.handleClick}>Click</button>
	}
}

export default This
