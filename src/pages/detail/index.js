import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { Content, Father, Header } from './style';

class Detail extends Component {
	render() {
		return (
			<Fragment>
				<Father>
					<Header>{this.props.title}</Header>
					<Content
						dangerouslySetInnerHTML={{ __html: this.props.content }}
					></Content>
				</Father>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getdetail(this.props.match.params.id);
	}
}

const Mapstate = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content']),
});

const Mapdispatch = (dispatch) => ({
	getdetail(id) {
		dispatch(actionCreators.Getdetail(id));
	},
});

export default connect(Mapstate, Mapdispatch)(withRouter(Detail));
