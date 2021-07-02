import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<div className="Error">
			<h1>404: Not Found</h1>
		</div>
	</Layout>
);

export default NotFoundPage;
