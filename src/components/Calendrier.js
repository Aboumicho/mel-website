import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useAlert } from 'react-alert'
import 'react-calendar/dist/Calendar.css';
import titleDisabled from '../lib/titleDisabled';
import usePrevious from '../lib/usePrevious';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import firebasedb from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import {returnTimesInBetween} from '../lib/DateFormatter'
import getGenTime from '../lib/DateFormatter'

export function Calendrier(){
    let timesInBetween, options
    const [value, onChange] = useState(new Date());
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
    const disposCollectionRef = collection(firebasedb, 'disponibilities')
    const rendezVousCollectionRef = collection(firebasedb, 'rendezvous')
    //Get disponibilities FROM DB
    useEffect(() => {
        const getDisponibilities = async() => {
            
            const data = await getDocs(disposCollectionRef)
            setDisponibilities(data.docs.map(dispo => ({ ...dispo.data(), id: dispo.id })))
        }

        const getRendezVous = async() => {
            const data = await getDocs(rendezVousCollectionRef)
            setRendezvous(data.docs.map(rdv => ({...rdv.data(), id: rdv.id }) ) )
        }

        getDisponibilities()
        getRendezVous()
    }, [])

    
    console.log("rendez-vous sceduler pour la date selectionne: ", rendezvousForDateSelected)
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

            {disposForDateSelected ? <Select styles={{background:"#303245"}} options={options}  /> : <p> Pas de dispos pour le moment </p> } <br />
        </div>
    )
}

