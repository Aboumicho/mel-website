import { transitions, positions, Provider as AlertProvider } from 'react-alert'

const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
    transitions: "scale"
  }

export default options