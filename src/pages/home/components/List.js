import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Content, Listitem } from '../style';

class List extends Component {
	render() {
		const { list } = this.props;
		return (
			<Fragment>
				{list.map((item) => {
					return (
						<Listitem key={item.get('id')}>
							<Content>
								<h2 className='title'>{item.get('title')}</h2>
								<p className='content'>{item.get('content')}</p>
							</Content>
							<img className='img' src={item.get('ImgSrc')} alt=''></img>
						</Listitem>
					);
				})}
			</Fragment>
		);
	}
}

const Mapstate = (state) => ({
	list: state.getIn(['home', 'contentList']),
});

export default connect(Mapstate, null)(List);
