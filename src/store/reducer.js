import { combineReducers } from 'redux-immutable';
import Headerreducer from '../common/header/store/reducer.js';

const reducer = combineReducers({
	header: Headerreducer,
});

export default reducer;
