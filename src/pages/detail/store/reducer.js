import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
	title: '',
	content: '',
});

const fn = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content,
			});
		default:
			return state;
	}
};

export default fn;
