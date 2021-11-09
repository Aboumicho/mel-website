const titleDisabled = ({ date, view }) => {
    const disabledDates = ["12-02-2021"];
    // Disable tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of disabled dates
      
            // const regex = /[a-zA-Z]{3}\s[0-9]{2}\s[0-9]{4}/i
            // const date_formatted = date.toString().match(regex)
            // const month_number = getMonthFromString(date_formatted)
            // const todaysDate = new Date();

        return disableAllDatesBeforeToday(date)
    }
  }

  function getMonthFromString(date){

    var d = Date.parse(date );
    if(!isNaN(d)){
        const month = new Date(d).getMonth() + 1
       return month;
    }
    return -1;
  }

  function disableAllDatesBeforeToday(date){
    const todaysDate = new Date();
    const dateDay = date.getDate()
    const dateMonth = date.getMonth()
    const dateYear = date.getFullYear()
    // console.log("Date ", date)
    // console.log("Month ", date.getMonth() )
    // console.log("Day" , date.getDate())
    // console.log("Year ", dateYear)

    //same MONTH, same YEAR, different DAY
    if(todaysDate.getMonth() == dateMonth && todaysDate.getFullYear() == date.getFullYear() ){
        if(dateDay < todaysDate.getDate()){
            return true
        }
        else{
            return false
        }
    }
    // different MONTH, same YEAR, * DAY
    else if(todaysDate.getFullYear() == dateYear && todaysDate.getMonth() != dateMonth ){
        if(dateMonth < todaysDate.getMonth()){
            return true
        }
        else{
            return false
        }
    }
    //* Month, different YEAR, * DAY
    else if(todaysDate.getFullYear() != dateYear){
        if(dateYear < todaysDate.getFullYear() ){
            return true
        }
        else{
            return false
        }
    }
  }

export default titleDisabled