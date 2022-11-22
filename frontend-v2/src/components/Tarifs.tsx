import '../styles/Tarifs.css'
// import Service from './Service';
import CoupeLine from '../images/CoupeLine.jpg'
import CoupeSeulement from '../images/CoupeSeulement.jpg'
import LineSeulement from '../images/LineSeulement.jpg'
import BarberPole from '../images/BarberPole.png'
import CombCut from '../images/CombCut.png'
import CombCutColor from '../images/CombCutColor.png'
import { useSelector, useDispatch } from 'react-redux';
import {setBusinessContext} from '../actions/business'

interface servicesType {
    service: string
}
interface InputWrapperProps {
    children?: React.ReactNode
  }

function Tarifs() {

  const dispatch = useDispatch();
  const services: any = useSelector((state: any) => state.loadServices)
  const listeServices : [servicesType] = services.services

    const elements_nmbr = listeServices.length

    const Services = listeServices.map(service  => <h1 key={service.service }  > {service.service}</h1>) 
    // <Service key={service.service} service={service} elements_nmbr={elements_nmbr}/> 
    // )

    return (
      <div className="container">
          <div className="container-box">
            <div className="liste-services">
            {Services}

            </div>
          </div>
      </div>
    );
  }
  
  export default Tarifs;
  