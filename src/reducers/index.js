import { combineReducers } from 'redux';
import Services from './user-input/Services';
import LoadServices from './Services';
export default combineReducers({
    service: Services,
    loadServices: LoadServices
});