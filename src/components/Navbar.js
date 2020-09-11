import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>
				<header id='site_header' className='header'>
					<div className='header-content clearfix'>
						<div className='text-logo'>
							<NavLink exact to='/'>
								<div className='logo-symbol'>M</div>
								<div className='logo-text'>
									Matt <span>Murphy</span>
								</div>
							</NavLink>
						</div>

						<div className='site-nav mobile-menu-hide'>
							<ul className='leven-classNameic-menu site-main-menu'>
								<li className='menu-item menu-item-has-children current-menu-item'>
									<NavLink exact to='/about'>
										About Me
									</NavLink>
								</li>

								<li className='menu-item menu-item-has-children'>
									<NavLink exact to='/portfolio'>
										Portfolio
									</NavLink>
								</li>

								<li className='menu-item'>
									<NavLink exact to='/contact'>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>

						<div className='menu-toggle mobile-visible'>
							<i className='fa fa-bars'></i>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Navbar;
