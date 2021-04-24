import * as actionTypes from './actionTypes';
const { fromJS } = require('immutable');

const defaultState = fromJS({
	focused: false,
	mouseIn: false,

	list: [],

	//package当前1所在的页码
	page: 1,

	//tatalpackage一共有多少页
	totalpage: 1,
});

const fn = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.ON_FOCUSED:
			return state.set('focused', true);
		case actionTypes.OUT_FOCUSED:
			return state.set('focused', false);
		case actionTypes.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalpage: action.totalpage,
			});
		case actionTypes.MOUSE_OVER:
			return state.set('mouseIn', true);
		case actionTypes.MOUSE_OUT:
			return state.set('mouseIn', false);
		case actionTypes.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
};

export default fn;
