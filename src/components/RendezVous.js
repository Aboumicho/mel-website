import "../styles/RendezVous.css"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import { Calendrier } from "./Calendrier";
function RendezVous() {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.loadServices)
    const listeServices = services.services
    const _options = services.services.map(service => service.service)
    let selectOptions=[]
    for(const op in _options){
        selectOptions = selectOptions.concat({value: _options[op], label: _options[op] })
    }
    const options = selectOptions
      const selected = useSelector((state) => state.selectedButton)
      const display = selected.isSelected ? "flex" : "none"

    return (
      <div id="container-rendez-vous" className="container" style={{display: display}}>
            <div className="container-box">
            <div className="form">
      <div className="title">Rendez-Vous</div>
      {/* <div className="subtitle">Let's create your account!</div> */}
      <Select styles={{background:"#303245"}} options={options} makeAnimated={makeAnimated} value={selected.selection} placeholder={selected.selection} onChange={(event) => {dispatch({type: "SELECTED", payload: event.value}) }} />
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Last name</label>
      </div>
      
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <Calendrier />
      <button type="text" className="submit">submit</button>
    </div>            </div>
      </div>
    );
  }
  
  export default RendezVous;
  