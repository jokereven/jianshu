import axios from 'axios';
import * as actionTypes from './actionTypes';

const changedetail = (title, content) => ({
	type: actionTypes.CHANGE_DETAIL,
	title,
	content,
});

export const Getdetail = (id) => {
	return (dispatch) => {
		axios.get('/api/getdetail.json?id' + id).then((res) => {
			const result = res.data.data;
			dispatch(
				changedetail(result.detaillist[0].title, result.detaillist[0].content)
			);
		});
	};
};
