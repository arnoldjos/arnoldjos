import React from 'react';

import Footer from '../components/Footer/Footer';

export default function main({ children }) {
	return (
		<React.Fragment>
			{children}
			<Footer />
		</React.Fragment>
	);
}
