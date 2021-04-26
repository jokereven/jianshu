import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { Content, Listitem, Moreload } from '../style';

class List extends Component {
	render() {
		const { list, getmorelist, page } = this.props;
		return (
			<Fragment>
				{list.map((item, index) => {
					return (
						<Listitem key={index}>
							<Link to={'/detail/' + item.get('id')}>
								<Content>
									<h2 className='title'>{item.get('title')}</h2>
									<p className='content'>{item.get('content')}</p>
								</Content>
								<img className='img' src={item.get('ImgSrc')} alt=''></img>
							</Link>
						</Listitem>
					);
				})}
				<Moreload onClick={() => getmorelist(page)}>加载更多</Moreload>
			</Fragment>
		);
	}
}

const Mapstate = (state) => ({
	list: state.getIn(['home', 'contentList']),
	page: state.getIn(['home', 'listpage']),
});

const Mapdispatch = (dispatch) => ({
	getmorelist(page) {
		dispatch(actionCreators.getmorelist(page));
	},
});
export default connect(Mapstate, Mapdispatch)(List);
