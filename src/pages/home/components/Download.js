import React, { Component, Fragment } from 'react';
import { Down, Info } from '../style';

class Download extends Component {
	render() {
		return (
			<Fragment>
				<Down>
					<img
						className='img'
						src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-bef8a3919bdba9e8d965956b37291e98.png'
						alt=''
					></img>
					<Info>
						<p className='download'>下载简书手机App</p>
						<p className='more'>随时随地发现和创作内容</p>
					</Info>
				</Down>
			</Fragment>
		);
	}
}

export default Download;
