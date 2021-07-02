import React from 'react';
import ContactComponent from '../components/contactComponent';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<div className="Contact">
				<ContactComponent />
			</div>
		</Layout>
	);
};

export default Contact;
