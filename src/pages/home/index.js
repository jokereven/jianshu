import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Border from './components/Border';
import Download from './components/Download';
import List from './components/List';
import Recommend from './components/Recommend';
import { HeaderWapper, HomeLeft, HomeRight } from './style';
import {connect}from 'react-redux'

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
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			const action = {
				type: 'home_json',
				borderlist: result.borderlist,
				contentList: result.contentList,
			};
			this.props.changehomedata(action);
		});
	}
}

const Mapdispatch = (dispatch) => ({
	changehomedata(action) {
		dispatch(action)
	}
})

export default connect(null,Mapdispatch)(Home);
