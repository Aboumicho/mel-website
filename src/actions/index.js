export const selectedButton = (selected) => {
    console.log("ACTION : SELECTED" )
    return(dispatch)=>{dispatch({type: "SELECTED", payload: selected})}
}
