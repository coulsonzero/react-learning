import React from "react"
// 数据类型校验 yarn add prop-types
import PropTypes from "prop-types"

const List = (props) => {
	return <ul>{props.text}</ul>
}

List.propTypes = {
    text: PropTypes.string
}

// 父组件没有写参数
List.defaultProps = {
    text: "Default Value !"
}

const DefaultProps = () => {
	return (
		<>
			<List text="Hello React !" />
			<List />
		</>
	)
}

export default DefaultProps
