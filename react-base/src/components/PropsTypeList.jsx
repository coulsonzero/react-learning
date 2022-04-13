import React from "react"
// 数据类型校验 yarn add prop-types
import PropTypes from "prop-types"

const List = (props) => {
	const list = props.links.map((item, index) => <li key={index}>{item}</li>)
	return <ul>{list}</ul>
}

// 校验方法
List.propTypes = {
    links: PropTypes.array
}



const PropsTypeList = () => {
    const links = ["Home", "About", "Docs"]
    return (
        <List links={links}/>
    )
}


export default PropsTypeList
