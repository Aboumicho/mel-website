import { combineReducers } from 'redux';
import SelectedButton from './SelectedButton';
import LoadServices from './Services';
export default combineReducers({
    selectedButton: SelectedButton,
    loadServices: LoadServices
});