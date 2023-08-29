import React from 'react';
import Nav from '../Nav';
import Header_Section from './Header_Section';
import Feature_Section from './Feature_Section';
import Team_Title_section from './Team_Title_section';
import Footer from '../Footer';





import Service_Section from './Service_Section';
import Consulting_section from './Consulting_section';

import Contact_Section from './Contact_Section';
import Clients from './Clients';
import ModalE from './ModalE';

export default function Hero() {
	return (
		<div>
			<Nav></Nav>
			<Header_Section></Header_Section>
			<ModalE></ModalE>
			{/* <Home_Section></Home_Section> */}
			<Feature_Section></Feature_Section>

			<Service_Section></Service_Section>
			<Clients></Clients>
			<Consulting_section></Consulting_section>
			<Team_Title_section></Team_Title_section>
			<Contact_Section></Contact_Section>

			{/* <News_Section></News_Section> */}
			<Footer></Footer>
		</div>
	);
}
