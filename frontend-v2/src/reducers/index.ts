import { combineReducers } from 'redux';
import Services from './service-input/Services';
import LoadServices from './Services';
import formHandler from './form/formHandler';
export default combineReducers({
    service: Services,
    loadServices: LoadServices,
    formHandler: formHandler
});