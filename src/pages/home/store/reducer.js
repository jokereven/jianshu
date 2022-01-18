import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	contentList: [],
	borderlist: [],
	listpage: 1, //加载地一页的数据
	showScroll: false, //回到顶部的控件是否隐藏默认隐藏
	userlist: [],
});

const home_json = (state, action) => {
	return state.merge({
		contentList: fromJS(action.contentList),
		borderlist: fromJS(action.borderlist),
	});
};

const add_home_list = (state, action) => {
	return state.merge({
		contentList: state
			.get('contentList')
			.concat(action.list._root.entries[0][1]._tail.array),
		listpage: action.Nextpage,
	});
};

const user_massage = (state, action) => {
	return state.merge({
		userlist: state.get('userlist').concat(fromJS(action.userlist))
	});
};

const back_top_show = (state, action) => {
	return state.set('showScroll', action.show);
};

const fn = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.HOME_JSON:
			return home_json(state, action);
		case actionTypes.ADD_HOME_LIST:
			return add_home_list(state, action);
		case actionTypes.BACK_TOP_SHOW:
			return back_top_show(state, action);
		case actionTypes.GET_USER_MASSAGE:
			return user_massage(state, action);
		default:
			return state;
	}
};

export default fn;
