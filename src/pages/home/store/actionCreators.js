import axios from 'axios';
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
