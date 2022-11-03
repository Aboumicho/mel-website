const titleDisabled = ({ date , view }:({date: Date, view:string}))  => {
    // Disable tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of disabled dates

        return disableAllDatesBeforeToday(date)
    }
  }

  function getMonthFromString(date: string){

    var d = Date.parse(date );
    if(!isNaN(d)){
        const month = new Date(d).getMonth() + 1
       return month;
    }
    return -1;
  }

  function disableAllDatesBeforeToday(date: Date){
    const todaysDate = new Date();
    const dateDay = date.getDate()
    const dateMonth = date.getMonth()
    const dateYear = date.getFullYear()


    //same MONTH, same YEAR, different DAY
    if(todaysDate.getMonth() === dateMonth && todaysDate.getFullYear() === date.getFullYear() ){
        if(dateDay < todaysDate.getDate()){
            return true
        }
        else{
            return false
        }
    }
    // different MONTH, same YEAR, * DAY
    else if(todaysDate.getFullYear() === dateYear && todaysDate.getMonth() !== dateMonth ){
        if(dateMonth < todaysDate.getMonth()){
            return true
        }
        else{
            return false
        }
    }
    //* Month, different YEAR, * DAY
    else if(todaysDate.getFullYear() !== dateYear){
        if(dateYear < todaysDate.getFullYear() ){
            return true
        }
        else{
            return false
        }
    }
  }

export default titleDisabled