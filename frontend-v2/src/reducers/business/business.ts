interface businessState {
    businessUUID: string;
    businessUserUID: string | null;
    businessName: string;
    businessPhone: string;
}

interface actionType{
    payload: businessState;
    type: string;
}

const business : businessState = {
    businessName: "",
    businessPhone: "",
    businessUUID: "",
    businessUserUID: ""
}


let INITIAL_STATE : businessState;

const businessReducer = (state: businessState = INITIAL_STATE, action:actionType)  =>{

    switch(action.type){
        case " GET_BUSINESSES":
            state = action.payload
            return  {
                ...state,
            };
        default:
            return state


    }
}

export default businessReducer