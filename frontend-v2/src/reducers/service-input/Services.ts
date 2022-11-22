interface State{
   isSelected : boolean;
   selection: string; 
}

const INITIAL_STATE: State = {
    isSelected: false,
    selection: ""
}

const Services = (state=INITIAL_STATE, action:any) =>{

    switch(action.type){
        case "SELECTED":
            state.isSelected = !state.isSelected;
            state.selection = action.payload
            return  {
                ...state,
            };
        default:
            return state


    }
}

export default Services