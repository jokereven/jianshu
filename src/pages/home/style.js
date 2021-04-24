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
