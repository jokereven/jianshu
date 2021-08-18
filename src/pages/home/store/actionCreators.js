import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const home_json = (result) => ({
	type: actionTypes.HOME_JSON,
	borderlist: result.borderlist,
	contentList: result.contentList,
});

export const homejson = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(home_json(result));
		});
	};
};

//获取user数据
const get_user_massage = (result) => ({
	type: actionTypes.GET_USER_MASSAGE,
	userlist:result.userlist,
});

export const getusermassgae = () => {
	return (dispatch) => {
		axios.get('api/Authormassage.json').then((res) => {
			const result = res.data.data;
			dispatch(get_user_massage(result));
		});
	};
};

const addhomelist = (list, Nextpage) => ({
	type: actionTypes.ADD_HOME_LIST,
	list: fromJS(list),
	Nextpage,
});

export const getmorelist = (page) => {
	return (dispatch) => {
		axios.get('/api/homelist.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addhomelist(result, page + 1));
		});
	};
};

export const backtopshow = (show) => ({
	type: actionTypes.BACK_TOP_SHOW,
	show,
});
