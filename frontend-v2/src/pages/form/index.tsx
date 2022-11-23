import "../../style/RendezVous.scss"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import {updateFirstName , updateLastName , updateEmail} from '../../actions/form/formHandler'
import { Button } from '../../components/Button';

const Form = (): JSX.Element => {
    const dispatch = useDispatch();
    return(
        <div id="container-rendez-vous" className="container" >
        <div className="container-box">
        <div className="form">
  <div className="title">Rendez-Vous</div>
  {/* <div className="subtitle">Let's create your account!</div> */}
  {/* <Select styles={{background:"#303245"}} options={options} makeAnimated={makeAnimated} value={selected.selection} placeholder={selected.selection} onChange={(event) => {dispatch({type: "SELECTED", payload: event.value}) }} /> */}
  <div className="input-container ic1">
    <input id="firstname" className="input" type="text" placeholder=" " onChange={(event)=> {dispatch(updateFirstName(event.target.value))}}/>
    <div className="cut"></div>
    <label htmlFor="firstname" className="placeholder">First name</label>
  </div>
  <div className="input-container ic2">
    <input id="lastname" className="input" type="text" placeholder=" " onChange={(event) => {dispatch(updateLastName(event.target.value))}} />
    <div className="cut"></div>
    <label htmlFor="lastname" className="placeholder">Last name</label>
  </div>
  
  <div className="input-container ic2">
    <input id="email" className="input" type="text" placeholder=" " onChange={(event) => {dispatch(updateEmail(event.target.value))}}/>
    <div className="cut cut-short"></div>
    <label htmlFor="email" className="placeholder">Email</label>
  </div>
  {/* <Calendrier /> */}
   <Button
   onClick={()=>{}}
   ></Button>
</div>            </div>
  </div>
    )
}

export default Form;