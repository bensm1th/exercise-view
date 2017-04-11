import { combineReducers } from 'redux';
import setup from './setup_reducer';

export default combineReducers({
    banana: () => 'banana',
    setup
});