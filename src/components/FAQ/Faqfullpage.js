import React, { useEffect, useState } from 'react';
import CustomAccordion from './CustomAccordion';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Footer from '../Footer';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../fire';

export default function Faqfullpage() {
	const [faqData, setFaqData] = useState([]);
	const pageTitle = 'Frequently Asked Questions';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'FAQ' }];

	const fetchFaqData = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, 'Faq')); // 'Faq' should be the collection name in your Firestore
			const faqArray = [];
			querySnapshot.forEach((doc) => {
				faqArray.push(doc.data());
			});
			setFaqData(faqArray);
		} catch (error) {
			console.error('Error fetching FAQ data:', error);
		}
	};

	useEffect(() => {
		fetchFaqData();
	}, []);
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<div className='container' style={{ padding: '40px' }}>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<h5 className='sub-title-side-line text-primary-color mrt-0 mrb-15'>
							Frequently Asked Question
						</h5>
						<h2 className='faq-title mrb-30'>Have Any Questions?</h2>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className='faq-block'>
							<CustomAccordion items={faqData} />
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
