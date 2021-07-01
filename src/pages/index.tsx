import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>Hello</div>
	</Layout>
);

export default IndexPage;
