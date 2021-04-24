import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const home_json = (result) => ({
	type: actionTypes.HOME_JSON,
	borderlist: result.borderlist,
	contentList: result.contentList,
});

const addhomelist = (list) => ({
	type: actionTypes.ADD_HOME_LIST,
	list: fromJS(list),
});

export const homejson = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(home_json(result));
		});
	};
};

export const getmorelist = () => {
	return (dispatch) => {
		axios.get('/api/homelist.json').then((res) => {
			const result = res.data.data;
			dispatch(addhomelist(result));
		});
	};
};
