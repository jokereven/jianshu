import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
	totalpage: Math.ceil(data.length / 10),
});

export const Onfocused = () => ({
	type: actionTypes.ON_FOCUSED,
});

export const Outfocused = () => ({
	type: actionTypes.OUT_FOCUSED,
});

export const Mouseover = () => ({
	type: actionTypes.MOUSE_OVER,
});

export const Mouseout = () => ({
	type: actionTypes.MOUSE_OUT,
});

export const changepage = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page,
});

export const getlist = () => {
	return (dispatch) => {
		axios
			.get('api/getlist.json')
			.then((res) => {
				const data = res.data;
				dispatch(changeList(data.data));
			})
			.catch(() => {
				console.log('error');
			});
	};
};
