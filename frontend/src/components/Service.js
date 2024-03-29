import "../styles/Service.css"
import BarberPole from '../images/BarberPole.png'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { selectedService } from "../actions/service/index";
import React from "react";
import { GET_LOCATION_HOOK } from "../hooks/getLocationsHook";
var Scroll = require('react-scroll');

function Service({service, elements_nmbr}) {
    const sizeElement = 100/elements_nmbr - 2
    const dispatch = useDispatch();
    const selected = useSelector((state) => state.service.SelectedButton)
    let scroll    = Scroll.animateScroll;
    
    function scrollToBottom() {
      scroll.scrollToBottom();
    }

    const { loading, error, data } = GET_LOCATION_HOOK();
    console.log("DATA > " , data)

    if(loading){
      return <h1>LOADING.</h1>
    }
    return (
    <div className="Service-container" style={{height: sizeElement + "%"}} onClick={() => {
      
      dispatch(selectedService(service.service)) 
      scrollToBottom()
      }}  >
      <div className="image-container"><img className="background-button" src={service.photo} /></div>
      <div className="Service">
        <div className="service-block">
          <div className="Text-container">
          
          <div className="service-text">  
          <div className="service-ligne"><p className="service-offert">{service.service}</p></div>
            <div className="service-ligne" ><p className="service-price">{service.price}$</p></div></div>
            </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Service;
  