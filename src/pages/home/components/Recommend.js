import React, { Component, Fragment } from 'react';
import { Author, Authorheader, Authorlist, Authormore } from '../style';

class Recommend extends Component {
	render() {
		return (
			<Fragment>
				<Author>
					<Authorheader>
						<p>推荐作者</p>
						<p className='change'>换一批</p>
					</Authorheader>
					<Authorlist>
						<img
							className='headerimg'
							src='https://upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
						></img>
						<div className='box'>
							<h3 className='username'>旸晓昆</h3>
							<p className='what'>写了133k字 · 455喜欢</p>
						</div>
						<div className='to_about'>+关注</div>
					</Authorlist>
					<Authormore>查看更多</Authormore>
				</Author>
			</Fragment>
		);
	}
}

export default Recommend;
