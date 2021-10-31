
const INITIAL_STATE = {
    isSelected: false,
    selection: ""
}

const SelectedButton = (state=INITIAL_STATE, action) =>{
    console.log("REDUCER ", action)
    switch(action.type){
        case "SELECTED":
            state.isSelected = true
            state.selection = action.payload
            console.log("REDUCER STATE ", state)
            return  {
                ...state,
            };
        default:
            return state


    }
}

export default SelectedButton