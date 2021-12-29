import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useAlert } from 'react-alert'
import 'react-calendar/dist/Calendar.css';
import titleDisabled from '../lib/titleDisabled';
import usePrevious from '../lib/usePrevious';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';


export function Calendrier(){
  
    const [value, onChange] = useState(new Date());
    const prevDate = usePrevious(value);
    console.log("DATE ", value)
    console.log("prevDate ", prevDate)
    const dateDay = value.getDate()
    const dateMonth = value.getMonth()
    const dateYear = value.getFullYear()

    return(
        <div style={{display: "flex", flexFlow: "column"}}>
            <Calendar 
                onChange={(value, event) =>{ onChange(value)}}
                value={value}
                calendarType={"ISO 8601"}
                // onClickDay={(value, event) => {alert.show(`Clicked Day ${value}`)}}
                tileDisabled={titleDisabled}
            />
            <p> {dateDay.toString()}/{dateMonth + 1}/{dateYear.toString()} </p><br/>
            <Select styles={{background:"#303245"}}  /> <br />
        </div>
    )
}

