import React, { Component, Fragment } from 'react';
import { Listitem ,Content } from '../style'

class List extends Component {
	render() {
		return (
			<Fragment>
				<Listitem>
					<Content>
						<h2 className="title">一句句累，泪，类</h2>
						<p className="content">
							因为发小说，在平台上吐槽，这才知道原来在简书里写小说的人还真不少。哈哈……
							有许多人是因为爱好，有许多人是因为想创造第二职业。
							我呢，刚开始的时...
						</p>
					</Content>
					<img className="img" src='https://upload-images.jianshu.io/upload_images/23344507-4e549e8b340aa718.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'></img>
				</Listitem>
			</Fragment>
		);
	}
}

export default List;
