import React, {useState} from "react"
import {connect} from "react-redux"
import {addPerson} from "../store/actions"

function AddPeosonForm(props) {
	const [person, setPerson] = useState("")

	function handleChange(e) {
		setPerson(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (person !== "") {
			props.addPerson(person)
			setPerson("")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={person}
				placeholder="Add"
				onChange={handleChange}
			/>
			<button type="submit">Add</button>
		</form>
	)
}

const mapDipatchToProps = {
	addPerson,
}


/*
function mapDipatchToProps(dispatch) {
	return {
		addPerson(person) {
			dispatch({type: "ADD_PERSON", data: person})
		},
	}
}
*/

export default connect(null, mapDipatchToProps)(AddPeosonForm)
