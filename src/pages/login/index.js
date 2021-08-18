import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { Loginbox, Namebox, Passwdbox } from './style';

class login extends Component {
	render() {
		const { loginstatus } = this.props;
		if (!loginstatus) {
			return (
				<Fragment>
					<Loginbox>
						<Namebox
							ref={(input) => {
								this.account = input;
							}}	
						></Namebox>
						<Passwdbox
							type='password'
							ref={(input) => {
								this.passwd = input;
							}}
						></Passwdbox>
						<button onClick={() => this.props.login(this.account, this.passwd)}>
							Submit
						</button>
					</Loginbox>
				</Fragment>
			);
		} else {
			return <Redirect to='/' />;
		}
	}
	componentDidMount() {}
}

const Mapstate = (state) => ({
	loginstatus: state.getIn(['login', 'login']),
});

const Mapdispatch = (dispatch) => ({
	login(accountElem, passwdElem) {
		console.log(accountElem, passwdElem);
		dispatch(actionCreators.login(accountElem.value, passwdElem.value));
	},
});

export default connect(Mapstate, Mapdispatch)(login);
