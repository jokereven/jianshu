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

export const Down = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	width: 280px;
	height: 80px;
	background-color: #fff;
	margin-top: 16px;
	border-radius: 4px;
	box-shadow: 0 0 2px #ddd;
	.img {
		width: 60px;
		height: 60px;
	}
`;

export const Info = styled.div`
	cursor: pointer;
	width: 180px;
	height: 80px;
	margin-left: 16px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	.download {
		font-size: 15px;
		color: #333;
	}
	.more {
		font-size: 13px;
		color: #999;
	}
`;

export const Author = styled.div`
	width: 280px;
	height: 320px;
	position: relative;
`;

export const Authorheader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 280px;
	line-height: 32px;
	height: 32px;
	background-color: #fff;
	p {
		font-size: 14px;
		color: #969696;
	}
	.change {
		cursor: pointer;
	}
`;

export const Authorlist = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 47px;
	overflow: hidden;
	.headerimg {
		width: 48px;
		height: 48px;
		border-radius: 50px;
		float: left;
	}
	.box {
		width: 168px;
		float: left;
		margin-top: 4px;
		.username {
			font-size: 14px;
			padding-left: 12px;
		}
		.what {
			font-size: 12px;
			color: #969696;
			margin-top: 12px;
			padding-left: 8px;
		}
	}
	.to_about {
		color: #096;
		padding: 8px 4px 0px 0px;
		font-size: 12px;
	}
`;

export const Authormore = styled.div`
	width: 280px;
	height: 32px;
	border-radius: 4px;
	margin-top: 4px;
	line-height: 32px;
	text-align: center;
	box-shadow: 0 0 2px #ddd;
	position: absolute;
	bottom: 0px;
	font-size: 12px;
	font-family: 宋体;
	background-color: #ccc;
	cursor: pointer;
`;
