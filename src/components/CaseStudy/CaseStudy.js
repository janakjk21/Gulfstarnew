import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyimg from '../../Assets/images/case-study/case-study_01.jpg';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Footer from '../Footer';
import Demand from './Demand';

export default function CaseStudy() {
	const pageTitle = 'About Us';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'CaseStudy' }];

	const caseStudies = [
		{
			id: 1,
			imageSrc: `${CaseStudyimg}`,
			category: 'Consulting',
			title: 'Business Solution',
			link: 'page-single-case-study.html', // Replace this with the actual link
		},
		{
			id: 2,
			imageSrc: `${CaseStudyimg}`,
			category: 'Consulting',
			title: 'Business Solution',
			link: 'page-single-case-study.html', // Replace this with the actual link
		},
		{
			id: 11,
			imageSrc: `${CaseStudyimg}`,
			category: 'Consulting',
			title: 'Business Solution',
			link: 'page-single-case-study.html', // Replace this with the actual link
		},
		// Add more case study data
	];

	return (
		<div>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />

			<Demand></Demand>
			<Footer></Footer>
		</div>
	);
}

const CaseStudyItem = ({ id, imageSrc, category, title }) => {
	return (
		<div className='col-md-6 col-lg-6 col-xl-4'>
			<div className='case-study-item mrb-30'>
				<div className='case-study-thumb'>
					<img className='img-full' src={imageSrc} alt='' />
					<div className='case-study-link-icon'>
						<Link to={`/case-studies/${id}`}>
							<i className='webex-icon-attachment1' />
						</Link>
					</div>
					<div className='case-study-details p-4'>
						<h6 className='case-study-category side-line mrb-5'>{category}</h6>
						<h4 className='case-study-title'>{title}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
