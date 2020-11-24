import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [menu, setAsOpen] = useState(false);

	const toggleNav = () => {
		setAsOpen(!menu);
	};

	const show = menu ? 'show' : '';

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
						onClick={toggleNav}
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className={'collapse navbar-collapse ' + show}>
						<ul id='menu-primary' className='navbar-nav ml-auto'>
							{/* Home */}
							<li onClick={toggleNav}>
								<NavLink
									exact
									to='/'
									activeClassName='active'
									className='nav-Link'
								>
									Home
								</NavLink>
							</li>
							{/* About */}
							<li onClick={toggleNav}>
								<NavLink
									exact
									to='/samples-org'
									activeClassName='active'
									className='nav-Link'
								>
									Samples
								</NavLink>
							</li>
							{/* Portfolio */}
							<li onClick={toggleNav}>
								<NavLink
									exact
									to='/samples-1'
									activeClassName='active'
									className='nav-Link'
								>
									Samples 1
								</NavLink>
							</li>
							{/* Contact */}
							<li onClick={toggleNav}>
								<NavLink
									exact
									to='/samples-2'
									activeClassName='active'
									className='nav-Link'
								>
									Samples 2
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
