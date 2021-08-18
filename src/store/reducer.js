import { combineReducers } from 'redux-immutable';
import { reducer as Headerreducer } from '../common/header/store/';
import { reducer as detailreducer } from '../pages/detail/store/';
import { reducer as Homereducer } from '../pages/home/store/';
import { reducer as loginreducer } from '../pages/login/store';

const reducer = combineReducers({
	header: Headerreducer,
	home: Homereducer,
	detail: detailreducer,
	login: loginreducer,
});

export default reducer;
