import React from "react"
import PropTypes from "prop-types"


class List extends React.Component {
    // 设置静态变量初始化默认值
    static defaultProps = {
        text: "Hello, React !"
    }
    render() {
        return <div>{this.props.text}</div>
    }
}



const DefaultPropsStatic = () => {
	return (
		<>
			<List text="Hello, React !" />
			{/* 1.没有设置参数 */}
			<List />
		</>
	)
}

export default DefaultPropsStatic
