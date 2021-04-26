import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Author, Authorheader, Authorlist, Authormore } from '../style';

class Recommend extends Component {
	render() {
		const { list } = this.props;
		return (
			<Fragment>
				<Author>
					<Authorheader>
						<span className='arthor'>推荐作者</span>
						<span className='change'>换一批</span>
					</Authorheader>
					{list.map((item) => {
						return (
							<Authorlist key={item.get('id')}>
								<img className='headerimg' src={item.get('imgurl')}></img>
								<div className='box'>
									<h3 className='username'>{item.get('username')}</h3>
									<p className='what'>写了133k字 · 455喜欢</p>
								</div>
								<div className='to_about'>+关注</div>
							</Authorlist>
						);
					})}
					<Link to={'/arthor'}>
						<Authormore>查看更多</Authormore>
					</Link>
				</Author>
			</Fragment>
		);
	}
}

const Mapstate = (state) => ({
	list: state.getIn(['home', 'userlist']),
});

export default connect(Mapstate, null)(Recommend);
