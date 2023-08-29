import React from 'react';
import Nav from '../Nav';
import Feature_Section from './Feature_Sectionaboutus';

import Pagetitle from '../Pagetitle';
import Fullaboutus from './Fullaboutus';
import Footer from '../Footer';

export default function Aboutus() {
	const pageTitle = 'About Us';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'About Us' }];
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />

			{/* <Home_Section></Home_Section> */}
			<Feature_Section></Feature_Section>
			{/* <Team_Title_section></Team_Title_section> */}
			<Fullaboutus></Fullaboutus>
			<Footer></Footer>
		</>
	);
}
