import styled from 'styled-components';

export const HeaderWapper = styled.div`
	width: 960px;
	margin: 0px auto;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	width: 625px;
	float: left;
	padding-top: 30px;
`;

export const HomeRight = styled.div`
	float: right;
	width: 280px;
	padding: 30px 0 0;
`;

export const Listitem = styled.div`
	overflow: hidden;
	width: 625px;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ccc;
	box-sizing: border-box;
	.img {
		width: 150px;
		height: 100px;
		float: right;
		margin: -100px 0 8px 0;
	}
`;

export const Content = styled.div`
	width: 458px;
	margin: 12px 4px 8px 2px;
	.title {
		color: #969696;
		font-size: 18px;
		font-weight: 700;
		padding-bottom: 16px;
	}
	.content {
		margin: 0 0 8px;
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`;

export const Borderdiv = styled.div`
	margin: 6px 0;
	width: 280px;
`;

export const Borderlist = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.ImgSrc});
	background-size: contain;
`;

export const Moreload = styled.div`
	width: 100%;
	height: 32px;
	background-color: #ddd;
	margin: 16px 0;
	text-align: center;
	line-height: 32px;
	border-radius: 8px;
	cursor: pointer;
	color: #2f2f2f;
`;

export const Backtop = styled.div`
	position: fixed;
	bottom: 100px;
	right: 49px;
	border-radius: 4px;
	background-color: #ddd;
	width: 72px;
	height: 72px;
	font-size: 12px;
	font-family: 宋体;
	text-align: center;
	line-height: 72px;
	cursor: pointer;
`;
