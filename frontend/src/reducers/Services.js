import CoupeLine from '../images/CoupeLine.jpg'
import CoupeSeulement from '../images/CoupeSeulement.jpg'
import LineSeulement from '../images/LineSeulement.jpg'
import BarberPole from '../images/BarberPole.png'
import CombCut from '../images/CombCut.png'
import CombCutColor from '../images/CombCutColor.png'

const INITIAL_STATE = {
    services: [
        {service: "Coupe Line" , price: 30, photo: CoupeLine, icon: BarberPole},
        {service: "Coupe Seulement" , price: 25, photo: CoupeSeulement, icon: CombCut},
        {service: "Line Seulement" , price: 20, photo: LineSeulement, icon: CombCutColor},
    ]
}

const LoadServices = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default LoadServices