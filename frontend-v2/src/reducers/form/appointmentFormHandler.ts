interface FormHandlerState {
    firstName: string,
    lastName: string,
    email:string,
    services: Array<any>,
    date: any,
    formStatus: string

}

const INITIAL_STATE : FormHandlerState = {
    firstName: "",
    lastName: "",
    email:"",
    services: [],
    date: undefined,
    formStatus: ""

}

const formHandler = (state=INITIAL_STATE, action:any) =>{

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
            case "SERVICE_SELECT":
                state.services.push(action.payload)
                return  {
                    ...state,
                }
            case "SUBMIT_FORM" : {
                //submitFunction that calls graphql
                console.log("")
                return{
                    ...state
                }
            }
            case "UPDATE_FORM_STATUS" : {
                state.formStatus = action.payload
                return {
                    ...state
                }
            }

        default:
            return state


    }
}

export default formHandler