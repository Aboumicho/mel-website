export const updateFirstName = (textInput:string) => {
    return {type: "FIRST_NAME_UPDATE" , payload: textInput}
}

export const updateLastName = (textInput:string) => {
    return {type: "LAST_NAME_UPDATE" , payload: textInput}
}

export const updateEmail = (textInput:string) =>{
    return {type: "EMAIL_UPDATE" , payload: textInput}
}

export const updateDate=(dateSelectedValue:string) => {
    return{type : "DATE_UPDATE" , payload: dateSelectedValue}
}

export const submitForm=()=>{
    return{type: "SUBMIT_FORM" }
}

export const updateFormStatus = (formStatus: string) => {
    return {type: "UPDATE_FORM_STATUS", payload: formStatus}
}