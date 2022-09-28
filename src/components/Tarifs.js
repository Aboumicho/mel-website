import '../styles/Tarifs.css'
import Service from './Service';
import CoupeLine from '../images/CoupeLine.jpg'
import CoupeSeulement from '../images/CoupeSeulement.jpg'
import LineSeulement from '../images/LineSeulement.jpg'
import BarberPole from '../images/BarberPole.png'
import CombCut from '../images/CombCut.png'
import CombCutColor from '../images/CombCutColor.png'
import { useSelector, useDispatch } from 'react-redux';

function Tarifs() {
  const services = useSelector((state) => state.loadServices)
  const listeServices = services.services

    const elements_nmbr = listeServices.length

    const Services = listeServices.map(service => <Service key={service.service} service={service} elements_nmbr={elements_nmbr}/> )

    return (
      <div className="container">
          <div className="container-box">
            <div className="Services"><p>-</p><img src={BarberPole}/><p>-</p></div>
            <div className="liste-services">
            {Services}

            </div>
          </div>
      </div>
    );
  }
  
  export default Tarifs;
  