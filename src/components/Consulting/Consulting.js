import React from 'react';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';

import Footer from '../Footer';
import Applyprocess from './Applyprocess';

export default function Consulting({ Title }) {
	const pageTitle = 'Consulting';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'Consulting' }];
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			{/* <ServiceDetails Title={Title}></ServiceDetails>
			<Footer></Footer> */}
			<Applyprocess></Applyprocess>
			<Footer></Footer>
		</>
	);
}
