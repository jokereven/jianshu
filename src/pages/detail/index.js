import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Content, Father, Header } from './style';
import {actionCreators} from './store'

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
		this.props.getdetail();
	}
}

const Mapstate = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content']),
});

const Mapdispatch = (dispatch) => ({
	getdetail() {
		dispatch(actionCreators.Getdetail())
	 }
})

export default connect(Mapstate, Mapdispatch)(Detail);
