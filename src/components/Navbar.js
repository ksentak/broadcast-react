import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { menu: false };
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({ menu: !this.state.menu });
	}

	render() {
		const show = this.state.menu ? 'show' : '';
		return (
			<div className='Navbar'>
				<nav className='navbar navbar-expand-sm'>
					<div className='container navContainer'>
						<button
							className='navbar-toggler ml-auto'
							type='button'
							aria-controls='navbarMobile'
							aria-expanded='false'
							aria-label='Toggle navigation'
							onClick={this.toggleNav}
						>
							<span className='navbar-toggler-icon' />
						</button>
						<div className={'collapse navbar-collapse ' + show} id='navbarMobile'>
							<ul id='menu-primary' className='navbar-nav ml-auto'>
								{/* Home */}
								<li onClick={this.toggleNav}>
									<NavLink exact to='/' activeClassName='active' className='nav-Link'>
										Home
									</NavLink>
								</li>

								{/* About */}
								<li onClick={this.toggleNav}>
									<NavLink
										exact
										to='/about'
										activeClassName='active'
										className='nav-Link'
									>
										About
									</NavLink>
								</li>

								{/* Portfolio */}
								<li onClick={this.toggleNav}>
									<NavLink
										exact
										to='/portfolio'
										activeClassName='active'
										className='nav-Link'
									>
										Samples
									</NavLink>
								</li>

								{/* Contact */}
								<li onClick={this.toggleNav}>
									<NavLink
										exact
										to='/contact'
										activeClassName='active'
										className='nav-Link'
									>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
