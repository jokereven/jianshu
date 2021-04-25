import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IconfontStyle } from '../../static/iconfont/iconfont.js';
import { actionCreator } from './store/';
import {
	Addition,
	Button,
	HeaderWarrper,
	Logo,
	Navbar,
	Navlist,
	Navsearch,
	Search,
	Searchchange,
	Searchdiv,
	Searchhot,
	SearchInfo,
	Searchlist,
} from './style.js';

class Header extends Component {
	getListArea() {
		const {
			headlnout,
			mouseIn,
			focused,
			list,
			page,
			headlnover,
			headlnchangepage,
			totalpage,
		} = this.props;
		const newList = list.toJS();
		const pagelist = [];
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pagelist.push(<Searchlist key={i}>{newList[i]}</Searchlist>);
			}
		}
		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseOver={headlnover} onMouseOut={headlnout}>
					<Searchhot>热门搜索</Searchhot>
					<Searchchange
						onClick={() => headlnchangepage(page, totalpage, this.spinIcon)}
					>
						<span
							ref={(icon) => {
								this.spinIcon = icon;
							}}
							className='iconfont spin'
						>
							&#xe606;
						</span>
						换一批
					</Searchchange>
					<Searchdiv>{pagelist}</Searchdiv>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}
	render() {
		const { focused, headlnonfocus, headlnonblur, list } = this.props;
		return (
			<Fragment>
				<IconfontStyle />
				<HeaderWarrper>
					<Link to={'/'}>
						<Logo />
					</Link>
					<Navbar>
						<Navlist className='left Home'>首页</Navlist>
						<Navlist className='left download'>下载App</Navlist>
						<Navlist className='right'>
							<span className='iconfont'>&#xe636;</span>
						</Navlist>
						<Navlist className='right'>登陆</Navlist>

						<Search>
							<CSSTransition timeout={500} in={focused} classNames='slide'>
								<Navsearch
									onFocus={() => headlnonfocus(list)}
									onBlur={headlnonblur}
									className={focused ? 'focused' : ''}
								></Navsearch>
							</CSSTransition>
							<span
								className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}
							>
								&#xe66e;
							</span>
							{this.getListArea()}
						</Search>
					</Navbar>
					<Addition>
						<Button className='login'>注册</Button>
						<Button className='writter'>
							<span className='iconfont'>&#xe708;</span>写文章
						</Button>
					</Addition>
				</HeaderWarrper>
			</Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		//一下二个方法一样
		// focused: state.get('header').get('focused'),
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalpage: state.getIn(['header', 'totalpage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		headlnonfocus(list) {
			if (list.size === 0) {
				dispatch(actionCreator.getlist());
			}
			dispatch(actionCreator.Onfocused());
		},
		headlnonblur() {
			dispatch(actionCreator.Outfocused());
		},
		headlnover() {
			dispatch(actionCreator.Mouseover());
		},
		headlnout() {
			dispatch(actionCreator.Mouseout());
		},
		headlnchangepage(page, totalpage, spin) {
			let Angle = spin.style.transform.replace(/[^0-9]/gi, '');
			if (Angle) {
				Angle = parseInt(Angle, 10);
			} else {
				Angle = 0;
			}
			spin.style.transform = 'rotate(' + Angle + 360 + 'deg)';
			console.log(spin.style.transform);
			if (page < totalpage) {
				dispatch(actionCreator.changepage(page + 1));
			} else {
				dispatch(actionCreator.changepage(1));
			}
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
