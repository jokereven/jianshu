import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Borderdiv, Borderlist } from '../style';

class Border extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<Fragment>
				<Borderdiv>
					{list.map((item) => {
						return (
							<Borderlist ImgSrc={item.get('ImgSrc')} key={item.get('id')} />
						);
					})}
				</Borderdiv>
			</Fragment>
		);
	}
}

const MapState = (state) => ({
	list: state.getIn(['home', 'borderlist']),
});

export default connect(MapState, null)(Border);
