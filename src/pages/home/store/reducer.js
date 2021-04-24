import * as actionTypes from './actionTypes';
const { fromJS } = require('immutable');

const defaultState = fromJS({
	contentList: [],
	borderlist: [],
});

const fn = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.HOME_JSON:
			return state.merge({
				contentList: fromJS(action.contentList),
				borderlist: fromJS(action.borderlist),
			});
		default:
			return state;
	}
};

export default fn;
