import React from 'react';
import AboutComponent from '../components/aboutComponent';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
	return (
		<Layout>
			<SEO title="About" />
			<div className="About">
				<AboutComponent />
			</div>
		</Layout>
	);
};

export default About;
