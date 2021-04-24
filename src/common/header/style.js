import styled from 'styled-components';
import logo_src from '../../static/img/logo.png';

export const HeaderWarrper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f3f3f3;
`;

export const Logo = styled.a.attrs({
	href: '/',
})`
	position: absolute;
	width: 100px;
	height: 56px;
	margin-top: 1px;
	display: block;
	background: url(${logo_src}) no-repeat 0 0 / contain;
`;

export const Navbar = styled.div`
	width: 945px;
	height: 58px;
	margin: 0 auto;
	margin-right: 185px;
	box-sizing: border-box;
`;

export const Navlist = styled.span`
	font-size: 17px;
	line-height: 58px;
	padding: 0px 15px;
	color: #969696;
	&.left {
		float: left;
	}
	&.right {
		float: right;
	}
	&.Home {
		color: #ea6f5a;
	}
	&.download {
		color: #333;
	}
`;

export const Navsearch = styled.input.attrs({
	placeholder: '搜索',
})`
	font-size: 14px;
	width: 160px;
	height: 38px;
	border: 1px solid #eee;
	box-sizing: border-box;
	border-radius: 40px;
	outline: none;
	margin-left: 18px;
	margin-top: 9px;
	padding: 0 36px 0 12px;
	&::placeholder {
		color: #a0a0a0;
	}
	&.focused {
		width: 317px;
	}
	&.slide-enter {
		transition: 0.5s;
	}
	&.slide-enter-active {
		width: 317px;
	}
	&.slide-exit {
		transition: 0.5;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition = styled.div`
	height: 58px;
	position: absolute;
	top: 0;
	right: 0;
`;

export const Button = styled.button`
	line-height: 38px;
	margin-top: 9px;
	margin-right: 12px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	padding: 0 20px;
	&.login {
		color: #ec6149;
		background-color: rgba(236, 97, 73, 0.05);
	}
	&.writter {
		color: #fff;
		background-color: #ec6149;
	}
`;

export const Search = styled.div`
	float: left;
	position: relative;
	.zoom {
		position: absolute;
		width: 32px;
		height: 24px;
		bottom: 8px;
		right: 8px;
		line-height: 24px;
		text-align: center;
		border-radius: 19px;
		&.focused {
			background-color: #ccc;
		}
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0px;
	top: 58px;
	width: 256px;
	height: 117px;
`;

export const Searchhot = styled.div`
	font-size: 14px;
	float: left;
	color: #ddd;
	margin: 8px;
`;

export const Searchchange = styled.span`
	.spin {
		display: block;
		float: left;
		transition: 0.3s;
		margin-right: 4px;
		font-size: 12px;
		transform-origin: center center;
	}
	cursor: pointer;
	font-size: 13px;
	color: #aaa;
	float: right;
	margin: 8px;
`;

export const Searchdiv = styled.div`
background-color:#000;
	box-shadow: 0 0 1px #ccc;
	border: 1px solid #ddd;
	width: 256px;
	overflow: hidden;
`;

export const Searchlist = styled.a`
	font-size: 8px;
	color: #bbb;
	display: block;
	float: left;
	margin-top: 20px;
	padding: 0 5px;
	box-shadow: 0 0 1px #aaa;
	border-radius: 3px;
	margin-left: 4px;
	margin: 8px;
`;
