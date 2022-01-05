export const selectedButton = (selected) => {
    
    return(dispatch)=>{dispatch({type: "SELECTED", payload: selected})}
}
