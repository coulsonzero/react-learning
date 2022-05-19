import React from "react"
import PropTypes from "prop-types"

// 3. 父组件没有写参数,在此设置参数默认值
const List = ({text="Hello, React !"}) => {
    // 2. 子组件使用了参数
	return <ul>{text}</ul>
}

List.propTypes = {
	text: PropTypes.string,
}


const DefaultProps2 = () => {
	return (
		<>
			<List text="Hello React !" />
			{/* 1.没有设置参数 */}
			<List />
		</>
	)
}

export default DefaultProps2
