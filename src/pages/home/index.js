import React, { Component, Fragment } from 'react';
import Border from './components/Border';
import Download from './components/Download';
import List from './components/List';
import Recommend from './components/Recommend';
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
}

export default Home;
