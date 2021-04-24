import { combineReducers } from 'redux-immutable';
import { reducer as Headerreducer } from '../common/header/store/';
import {reducer as Homereducer }  from '../pages/home/store/';

const reducer = combineReducers({
	header: Headerreducer,
	home: Homereducer,
});

export default reducer;
