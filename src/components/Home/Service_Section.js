import React from 'react';
import {
	FaBriefcase,
	FaChalkboardTeacher,
	FaLightbulb,
	FaMapMarkerAlt,
	FaPassport,
	FaPlane,
	FaSearch,
	FaUser,
	FaUserTie,
} from 'react-icons/fa';

export default function Service_Section() {
	const servicesData = [
		{
			title: 'Recruitment',
			content:
				'Manpower agencies help businesses find qualified candidates for open positions. They source candidates from various channels and their candidate database.',
			icon: <FaUserTie size={50} color='#0E90D5' />,
		},
		{
			title: 'Job Placement',
			content:
				'Once a candidate is selected, the manpower agency helps secure the job, negotiate terms, provide visa assistance, and arrange travel.',
			icon: <FaBriefcase size={50} color='#0E90D5' />,
		},
		{
			title: 'Pre-employment Screening',
			content:
				'Manpower agencies conduct screening of candidates, checking education, work experience, and criminal history.',
			icon: <FaSearch size={50} color='#0E90D5' />,
		},
		{
			title: 'Training',
			content:
				'Candidates receive training, including soft skills, technical skills, and language training.',
			icon: <FaChalkboardTeacher size={50} color='#0E90D5' />,
		},
		{
			title: 'Visa Assistance',
			content:
				'Manpower agencies assist candidates with the visa application process, providing information, completing forms, and scheduling interviews.',
			icon: <FaPassport size={50} color='#0E90D5' />,
		},
		{
			title: 'Travel Assistance',
			content:
				'Candidates receive travel arrangements, including flights, accommodation, and ground transportation.',
			icon: <FaPlane size={50} color='#0E90D5' />,
		},
		{
			title: 'Orientation',
			content:
				'Manpower agencies provide orientation to new candidates, covering company culture, work environment, and local laws.',
			icon: <FaMapMarkerAlt size={50} color='#0E90D5' />,
		},
		{
			title: 'Consulting',
			content:
				'Manpower agencies can provide consulting services to businesses on a variety of HR topics, such as employee relations, compensation, and benefits.',
			icon: <FaLightbulb size={50} color='#0E90D5' />, // Replace with the actual icon component you're using
		},
	];
	return (
		<section
			className='serivce-section bg-silver-light pdt-105 pdb-80'
			data-background='images/bg/abs-bg7.png'>
			<div className='section-title'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-5'>
							<div className='section-title-left-part mrb-sm-30'>
								<div className='section-left-sub-title mb-20'>
									<h5 className='sub-title text-primary-color'>
										Service We Offer
									</h5>
								</div>
								<h2 className='title'>Our Services</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='section-content'>
				<div className='container'>
					<div className='row'>
						{servicesData.map((service, index) => (
							<ServiceBox
								key={index}
								title={service.title}
								content={service.content}
								icon={service.icon}
							/>
						))}
						{/* Repeat the same pattern for other service boxes */}
					</div>
				</div>
			</div>
		</section>
	);
}

const ServiceBox = ({ title, content, icon }) => {
	return (
		<div className='col-md-6 col-xl-3'>
			<div className='service-box'>
				<div className='service-icon'>{icon}</div>
				<div className='service-content'>
					<div className='title'>
						<a href='#'>
							<h3>{title}</h3>
						</a>
					</div>
					<div className='para'>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
