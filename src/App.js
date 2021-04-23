import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from './store/index.js';
import { GlobalStyle } from './style.js';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Provider store={store}>
					<Header />
					<GlobalStyle />
				</Provider>
			</Fragment>
		);
	}
}

export default App;
