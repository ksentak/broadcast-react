import React from 'react';
import SamplesComponent from '../components/samplesComponent';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Samples = () => {
	return (
		<Layout>
			<SEO title="Samples" />
			<div className="Samples">
				<SamplesComponent />
			</div>
		</Layout>
	);
};

export default Samples;
