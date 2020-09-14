import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// CSS
import '../assets/css/navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>
				<nav className='navbar navbar-expand-sm'>
					<div className='container navContainer'>
						<button
							className='navbar-toggler ml-auto'
							type='button'
							data-toggle='collapse'
							data-target='#navbarMobile'
							aria-controls='navbarMobile'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon' />
						</button>
						<div className='collapse navbar-collapse' id='navbarMobile'>
							<ul id='menu-primary' className='navbar-nav ml-auto'>
								{/* Home */}
								<li data-toggle='collapse' data-target='.navbar-collapse.show'>
									<NavLink exact to='/' activeClassName='active' className='nav-Link'>
										Home
									</NavLink>
								</li>

								{/* About */}
								<li data-toggle='collapse' data-target='.navbar-collapse.show'>
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
								<li data-toggle='collapse' data-target='.navbar-collapse.show'>
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
								<li data-toggle='collapse' data-target='.navbar-collapse.show'>
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
