import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useAlert } from 'react-alert'
import 'react-calendar/dist/Calendar.css';
import titleDisabled from '../lib/titleDisabled';
import usePrevious from '../lib/usePrevious';

export function Calendrier(){
  
    const [value, onChange] = useState(new Date());
    const prevDate = usePrevious(value);
    console.log("DATE ", value)
    console.log("prevDate ", prevDate)

    return(
        <div style={{display: "flex"}}>
            <Calendar 
                onChange={(value, event) =>{ onChange(value)}}
                value={value}
                calendarType={"ISO 8601"}
                // onClickDay={(value, event) => {alert.show(`Clicked Day ${value}`)}}
                tileDisabled={titleDisabled}
            />
        </div>
    )
}

