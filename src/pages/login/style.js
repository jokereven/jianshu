import styled from 'styled-components';

export const Loginbox = styled.div`
	position: absolute;
	width: 456px;
	height: 256px;
	background-color: #ddd;
	opacity: 0.6;
	border-radius: 8px;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	button {
		width: 256px;
		height: 32px;
		outline: none;
		display: block;
		margin: 0px auto;
		background-color: #648;
	}
`;

export const Namebox = styled.input.attrs({
	placeholder: '用户名',
})`
	width: 256px;
	height: 16px;
	display: block;
	margin: 32px auto;
`;

export const Passwdbox = styled.input.attrs({
	placeholder: '密码',
})`
	width: 256px;
	height: 16px;
	display: block;
	margin: 32px auto;
`;
