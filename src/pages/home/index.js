import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Border from './components/Border';
import Download from './components/Download';
import List from './components/List';
import Recommend from './components/Recommend';
import { actionCreators } from './store/';
import { HeaderWapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
	render() {
		return (
			<Fragment>
				<HeaderWapper>
					<HomeLeft>
						<List>List</List>
					</HomeLeft>
					<HomeRight>
						<Border>Border</Border>
						<Download>Download</Download>
						<Recommend>Recommend</Recommend>
					</HomeRight>
				</HeaderWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.changehomedata();
	}
}

const Mapdispatch = (dispatch) => ({
	changehomedata() {
		const action = actionCreators.homejson();
		dispatch(action);
	},
});

export default connect(null, Mapdispatch)(Home);
