import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
