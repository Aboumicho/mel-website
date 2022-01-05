
const INITIAL_STATE = {
    isSelected: false,
    selection: ""
}

const SelectedButton = (state=INITIAL_STATE, action) =>{

    switch(action.type){
        case "SELECTED":
            state.isSelected = true
            state.selection = action.payload
            return  {
                ...state,
            };
        default:
            return state


    }
}

export default SelectedButton