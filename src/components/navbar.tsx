import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
	const [menu, setAsOpen] = useState<boolean>(false);

	const toggleNav = (): void => {
		setAsOpen(!menu);
	};

	const show: string = menu ? 'show' : '';

	return (
		<div className="Navbar">
			<nav className="navbar navbar-expand-sm">
				<div className="container navContainer">
					<button
						className="navbar-toggler ms-auto"
						type="button"
						aria-controls="navbarMobile"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={toggleNav}
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className={`collapse navbar-collapse ${show}`}>
						<ul id="menu-primary" className="navbar-nav ms-auto">
							{/* Home */}
							<li onClick={toggleNav}>
								<Link to="/" activeClassName="active" className="nav-Link">
									Home
								</Link>
							</li>
							{/* About */}
							<li onClick={toggleNav}>
								<Link to="/about" activeClassName="active" className="nav-Link">
									About
								</Link>
							</li>
							{/* Samples */}
							<li onClick={toggleNav}>
								<Link
									to="/samples"
									activeClassName="active"
									className="nav-Link"
								>
									Samples
								</Link>
							</li>
							{/* Contact */}
							<li onClick={toggleNav}>
								<Link
									to="/contact"
									activeClassName="active"
									className="nav-Link"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
