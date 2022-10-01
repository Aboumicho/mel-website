export const updateFirstName = (textInput) => {
    return {type: "FIRST_NAME_UPDATE" , payload: textInput}
}

export const updateLastName = (textInput) => {
    return {type: "LAST_NAME_UPDATE" , payload: textInput}
}

export const updateEmail = (textInput) =>{
    return {type: "EMAIL_UPDATE" , payload: textInput}
}

export const updateDate=(dateSelectedValue) => {
    return{type : "DATE_UPDATE" , payload: dateSelectedValue}
}

export const submitForm=()=>{
    return{type: "SUBMIT_FORM" }
}