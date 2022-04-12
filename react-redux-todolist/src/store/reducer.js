const initialState = {
	contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"],
}

// eslint-disable-next-line
export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PERSON":
			return {...state, contacts: [...state.contacts, action.data]}
		default:
			return state
	}

	/*
    if(action.type === "ADD_PERSON") {
        return {...state, contacts: [...state.contacts, action.data]}
    }
    return state
    */
}
