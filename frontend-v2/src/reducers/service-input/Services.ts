
const INITIAL_STATE = {
    isSelected: false,
    selection: ""
}

const Services = (state=INITIAL_STATE, action:any) =>{

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

export default Services