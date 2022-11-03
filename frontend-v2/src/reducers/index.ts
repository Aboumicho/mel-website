import { combineReducers } from 'redux';
import Services from './service-input/services';
import LoadServices from './services';
import formHandler from './form/formHandler';
export default combineReducers({
    service: Services,
    loadServices: LoadServices,
    formHandler: formHandler
});