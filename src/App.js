import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import Detail from './pages/detail/loadable.js';
import Home from './pages/home';
import login from './pages/login';
import write from './pages/write';
import store from './store/index.js';
import { GlobalStyle } from './style.js';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Provider store={store}>
					<BrowserRouter>
						<Header />
						<Route path='/' exact component={Home}></Route>
						<Route path='/login' exact component={login}></Route>
						<Route path='/detail/:id' exact component={Detail}></Route>
						<Route path='/write' exact component={write}></Route>
					</BrowserRouter>
					<GlobalStyle />
				</Provider>
			</Fragment>
		);
	}
}

export default App;
