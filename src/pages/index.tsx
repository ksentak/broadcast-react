import React from 'react';
import HomeComponent from '../components/homeComponent';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Home = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<div className="Home">
				<HomeComponent />
			</div>
		</Layout>
	);
};

export default Home;
