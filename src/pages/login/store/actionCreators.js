import axios from 'axios';
import * as actionTypes from './actionTypes';

const change_login = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true,
});

export const logout = () => ({
	type: actionTypes.LOG_OUT,
	value: false,
});

export const login = (account, passwd) => {
	return (dispatch) => {
		axios
			.get('/api/login.json?account=' + account + '&passwd=' + passwd)
			.then((res) => {
				if (res) {
					const result = res.data.data;
					dispatch(change_login());
				} else {
					alert('登入失败');
				}
			});
	};
};
