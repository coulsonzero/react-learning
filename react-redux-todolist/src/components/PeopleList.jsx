import React from "react"
import {connect} from "react-redux"

function PeopleList(props) {
	const list = props.contacts.map((item, index) => <li key={index}>{item}</li>)
	return (
		<>
			<ul>{list}</ul>
		</>
	)
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts,
	}
}

export default connect(mapStateToProps)(PeopleList)
