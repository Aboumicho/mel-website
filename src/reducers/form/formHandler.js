
const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email:"",
    date: undefined

}

const formHandler = (state=INITIAL_STATE, action) =>{

    switch(action.type){
        case "FIRST_NAME_UPDATE":
            state.firstName = action.payload
            return  {
                ...state,
            };
            case "LAST_NAME_UPDATE":
                state.lastName = action.payload
                return  {
                    ...state,
                };
            case "EMAIL_UPDATE":
                state.lastName=action.payload
                return {
                    ...state
                }
            case "DATE_UPDATE":{
                state.date = action.payload
                return{
                    ...state
                }
            } 
        default:
            return state


    }
}

export default formHandler