import React from 'react';

import consultingarea1 from '../../Assets/images/case-study/case-study_01.jpg';
import img1WebP from '../../Assets/images/Jobs/security.webp';
import img2WebP from '../../Assets/images/Jobs/construciton.webp';
import img3WebP from '../../Assets/images/Jobs/home care.webp';
import img4WebP from '../../Assets/images/Jobs/hotels.webp';
import img5WebP from '../../Assets/images/Jobs/clenaing.188b18f5b5eb12fbb596.jpg';
import img6WebP from '../../Assets/images/Jobs/m1.webp';
export default function Consulting_section() {
	return (
		<>
			{/* Divider Section End */}
			{/* Case Study Section Start */}
			<section
				className='bg-silver-light pdt-105 pdb-80'
				data-background='images/bg/abs-bg4.png'>
				<div className='section-title mrb-30 mrb-md-60'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 col-xl-6'>
								<h5 className='mrb-15 text-primary-color sub-title-side-line'>
									Project Completed
								</h5>
								<h2 className='mrb-30'>Job category</h2>
							</div>
							<div className='col-lg-4 col-xl-6 align-self-center text-left text-lg-right'>
								<a href='#' className='cs-btn-one btn-gradient-color btn-md'>
									All Project
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='section-content'>
					<div className='container'>
						<div className='row'>
							<CaseStudyItem
								imageSrc={img1WebP}
								link='page-single-case-study.html'
								category='Security Industry'
								title='Security Job'
							/>
							<CaseStudyItem
								imageSrc={img2WebP}
								link='page-single-case-study.html'
								category='Construction Industry'
								title='Construction Job'
							/>
							<CaseStudyItem
								imageSrc={img3WebP}
								link='page-single-case-study.html'
								category='Home Care'
								title='Home Care Job'
							/>
							<CaseStudyItem
								imageSrc={img4WebP}
								link='page-single-case-study.html'
								category='Hotels'
								title='Hotel Job'
							/>
							<CaseStudyItem
								imageSrc={img6WebP}
								link='page-single-case-study.html'
								category='Consulting'
								title='Consulting Solution'
							/>
							<CaseStudyItem
								imageSrc={img5WebP}
								link='page-single-case-study.html'
								category='Cleaning Industry'
								title='Cleaning Job'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const CaseStudyItem = ({ imageSrc, link, category, title }) => {
	return (
		<div className='col-md-6 col-lg-6 col-xl-4'>
			<div className='case-study-item mrb-30'>
				<div className='case-study-thumb'>
					<img className='img-full' src={imageSrc} alt='' />
					<div className='case-study-link-icon'>
						<a href={link}>
							<i className='webex-icon-attachment1' />
						</a>
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
