import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Author, Authorheader, Authorlist, Authormore } from '../style';

class Recommend extends Component {
	render() {
		const { list } = this.props;
		return (
			<Fragment>
				<Author>
					<Authorheader>
						<p>推荐作者</p>
						<p className='change'>换一批</p>
						{list.map((item) => {
							return (
								<div>
									<img className='headerimg' src={item.get('imgurl')}></img>
									<div className='box'>
										<h3 className='username'>{item.get('username')}</h3>
										<p className='what'>写了133k字 · 455喜欢</p>
									</div>
									<div className='to_about'>+关注</div>
								</div>
							);
						})}
					</Authorheader>
					<Authorlist></Authorlist>
					<Authormore>查看更多</Authormore>
				</Author>
			</Fragment>
		);
	}
}

const Mapstate = (state) => ({
	list: state.getIn(['home', 'userlist']),
});

export default connect(Mapstate, null)(Recommend);
