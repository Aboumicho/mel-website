import { combineReducers } from 'redux';
import Services from './service-input/services';
import LoadServices from './services';
import appointmentFormHandler from './form/appointmentFormHandler';
export default combineReducers({
    service: Services,
    loadServices: LoadServices,
    appointmentFormHandler: appointmentFormHandler
});