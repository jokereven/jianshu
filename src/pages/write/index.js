import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class write extends Component {
	render() {
		const { loginstatus } = this.props;
		if (loginstatus) {
			return <div>写文章页面</div>;
		} else {
			return <Redirect to='/login' />;
		}
	}
	componentDidMount() {}
}

const Mapstate = (state) => ({
	loginstatus: state.getIn(['login', 'login']),
});

export default connect(Mapstate, null)(write);
