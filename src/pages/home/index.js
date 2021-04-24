import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Border from './components/Border';
import Download from './components/Download';
import List from './components/List';
import Recommend from './components/Recommend';
import { actionCreators } from './store/';
import { Backtop, HeaderWapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
	headlnscrolltop() {
		window.scrollTo(0, 0);
	}
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
					{this.props.showScroll ? (
						<Backtop onClick={this.headlnscrolltop}>回到顶部</Backtop>
					) : null}
				</HeaderWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.changehomedata();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrolltopshow);
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrolltopshow);
	}
}

const Mapstate = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
});

const Mapdispatch = (dispatch) => ({
	changehomedata() {
		dispatch(actionCreators.homejson());
	},
	changeScrolltopshow() {
		if (parseInt(document.documentElement.scrollTop) >= 100) {
			dispatch(actionCreators.backtopshow(true));
		} else {
			dispatch(actionCreators.backtopshow(false));
		}
	},
});

export default connect(Mapstate, Mapdispatch)(Home);
