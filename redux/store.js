import {createStore} from 'redux';
import {reduceCounter} from './reducer';

const storeState = createStore(reduceCounter);
export default storeState;