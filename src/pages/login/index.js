import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Loginbox, Namebox, Passwdbox } from './style';

class login extends Component {
	render() {
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
	}
	componentDidMount() {}
}

const Mapdispatch = (dispatch) => ({
	login(accountElem, passwdElem) {
		dispatch(actionCreators.login(accountElem.value, passwdElem.value));
		console.log(accountElem.value, passwdElem.value);
	},
});

export default connect(null, Mapdispatch)(login);
