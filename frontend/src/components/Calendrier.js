import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendrier.css';
import titleDisabled from '../lib/titleDisabled';
import usePrevious from '../lib/usePrevious';
import Select from 'react-select'

import { useSelector, useDispatch } from 'react-redux';
import {returnTimesInBetween} from '../lib/DateFormatter'
import getGenTime from '../lib/DateFormatter'
import { updateDate } from '../actions/form/formHandler';

export function Calendrier(){
    let timesInBetween, options
    const [value, onChange] = useState(new Date());
    const {date} = useSelector((state) => {
        return {
          date: state.formHandler.date
        }
      });
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateDate(value))
    }, [date])
    console.log("date : ", date)
    //Previous selected date ex: Thu Dec 30 2021 15:30:28 GMT-0500 (Eastern Standard Time)
    const prevDate = usePrevious(value);
    //Selected day, month and year 
    const dateDay = value.getDate()
    const dateMonth = value.getMonth()
    const dateYear = value.getFullYear()
    //List of disponibilities [{open: 16:00, close: 21:00, date: 31/21/2021} ]
    const [disponibilities, setDisponibilities] = useState([])
    const [rendezvous, setRendezvous] = useState([])
    // La valeur de la date selectionne dans calendrier ex: 31/12/2021
    const dateSelected =  dateDay.toString() + "/" + (dateMonth + 1) + "/" + dateYear.toString()
    const disposForDateSelected = disponibilities.filter(dispo => dispo.date == dateSelected)[0]
    const rendezvousForDateSelected = rendezvous.filter(rdv => rdv.date == dateSelected)
 

    if(disposForDateSelected){
        let start = disposForDateSelected.open
        let close = disposForDateSelected.close
        options = []
        //Seperates in 30 minutes interval
        timesInBetween = returnTimesInBetween(start, close)
        //Get all times already taken
        let rdvTaken = rendezvousForDateSelected.map(rdv => rdv.time)
        
        //Remove already taken RendezVous
        rdvTaken.forEach(rdv => {
            const timeFormatted = getGenTime(rdv)
            const index = timesInBetween.indexOf(timeFormatted)
            timesInBetween.splice(index, 1)
        })
        //Generating options in SELECT
        timesInBetween.forEach(tIB => {
            options.push({value: tIB, label: tIB})
        })

    }

    options=[{value: "9:30-10:00" , label: "9:30-10:00"} , {value: "11:00-11:30" , label: "11:00-11:30"}];

    return(
        <div style={{display: "flex", flexFlow: "column"}}>
            <Calendar 
                onChange={(value, event) =>{ onChange(value)}}
                value={value}
                calendarType={"ISO 8601"}
                // onClickDay={(value, event) => {alert.show(`Clicked Day ${value}`)}}
                tileDisabled={titleDisabled}
            />
            <br/>

            {/* {disposForDateSelected ? <Select styles={{background:"#303245"}} options={options}  /> : <p> Pas de dispos pour le moment </p> } <br /> */}
            <Select styles={{background:"#303245"}} options={options}  />
        </div>
    )
}

