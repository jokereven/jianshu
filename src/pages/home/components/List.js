import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Content, Listitem, Moreload } from '../style';

class List extends Component {
	render() {
		const { list, getmorelist } = this.props;
		return (
			<Fragment>
				{list.map((item, index) => {
					return (
						<Listitem key={index}>
							<Content>
								<h2 className='title'>{item.get('title')}</h2>
								<p className='content'>{item.get('content')}</p>
							</Content>
							<img className='img' src={item.get('ImgSrc')} alt=''></img>
						</Listitem>
					);
				})}
				<Moreload onClick={getmorelist}>加载更多</Moreload>
			</Fragment>
		);
	}
}

const Mapstate = (state) => ({
	list: state.getIn(['home', 'contentList']),
});

const Mapdispatch = (dispatch) => ({
	getmorelist() {
		dispatch(actionCreators.getmorelist());
	},
});
export default connect(Mapstate, Mapdispatch)(List);
