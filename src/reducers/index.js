import {combineReducers} from 'redux'
import reducerTrainer from './reducer-trainer';
import reducerActiveTrainer from './reducer-active-trainer';

const allReducers=combineReducers({
    
    trainers:reducerTrainer,
    activeTrainer:reducerActiveTrainer
})

export default allReducers;3