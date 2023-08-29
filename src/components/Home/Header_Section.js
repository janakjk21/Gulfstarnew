import React from 'react';

import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../Assets/images/bg/esmonde-yong-9B08uduMyY-unsplash-_1_.webp';
import image2 from '../../Assets/images/bg/DSC00951.webp';
import image3 from '../../Assets/images/bg/jc-gellidon-XAphu7d5t0-unsplash.webp';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Header_Section() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		fade: true,
		autoplay: true,
	};
	return (
		<>
			<section className='banner-section'>
				{' '}
				<div className='home-carousel'>
					<Slider {...settings}>
						<SlideItem
							image={image1}
							title='Gulf Star Overseas Pvt. Ltd.'
							description='Your Trusted Partner for Manpower Solutions\n\nWelcome to Gulf Star Manpower Services, Nepals premier consultancy. We excel in recruitment, visa processing, and training services. Our extensive Gulf experience including UAE, Qatar, Kuwait, Bahrain, and Malaysia sets us as industry leaders. Count on us for documentation and resettlement assistance. We are your best choice for Nepal manpower.'
						/>
						<SlideItem
							image={image2}
							title='Redefining Manpower Excellence'
							description='Seeking the best manpower solutions? Gulf Star Overseas Pvt. Ltd. redefines recruitment with unparalleled services for clients and candidates. Backed by license number 1011/068/069, our expertise spans UAE, KSA, Qatar, Kuwait, Bahrain, and Malaysia. Choose us for superior manpower experience.'
						/>
						<SlideItem
							image={image3}
							title='15 Years of Excellence'
							description='Passionate about successful recruitment, our team values unique requirements of clients and candidates. Rigorous documentation ensures top-quality candidates and requirements. Our staff excels in manpower mobilization, screening, and documentation, providing personalized recruitment service.'
						/>
					</Slider>
				</div>
			</section>
		</>
	);
}

const SlideItem = ({ image, title, description }) => {
	return (
		<div className='slide-item' style={{ backgroundImage: `url(${image})` }}>
			<div className='image-layer' />
			<div className='auto-container'>
				<div className='row clearfix'>
					<div className='col-xl-8 col-lg-12 col-md-12 content-column'>
						<div className='content-box'>
							<h1>{title}</h1>
							<p>{description}</p>
							<div className='btn-box'>
								<a href='#' className='cs-btn-one btn-gradient-color'>
									Get a Quote
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function SampleNextArrow(props) {
	const { className, onClick } = props;

	return (
		<div
			className={className}
			style={{
				fontSize: '20px',
				height: '50px',
				borderRadius: '50%',
				paddingRight: '60px',
				lineHeight: '50px',

				width: '60px',
				background: 'linear-gradient(45deg, #0E90D5, #3032A2)',
				MozTransform: 'translate(0, -50%)',
				OTransform: 'translate(0, -50%)',
				msTransform: 'translate(0, -50%)',
				WebkitTransform: 'translate(0, -50%)',
				transform: 'translate(0, -50%)',
				MozTransition: 'all 600ms ease 0ms',
				WebkitTransition: 'all 600ms ease 0ms',
				msTransition: 'all 600ms ease 0ms',
				OTransition: 'all 600ms ease 0ms',
				transition: 'all 600ms ease 0ms',

				// Added for right arrow
			}}
			onClick={onClick}></div>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{
				fontSize: '20px',
				height: '50px',
				borderRadius: '50%',

				lineHeight: '50px',
				paddingRight: '60px',

				top: '50%',
				width: '50px',
				background: 'linear-gradient(45deg, #0E90D5, #3032A2)',
				MozTransform: 'translate(0, -50%)',
				OTransform: 'translate(0, -50%)',
				msTransform: 'translate(0, -50%)',
				WebkitTransform: 'translate(0, -50%)',
				transform: 'translate(0, -50%)',
				MozTransition: 'all 600ms ease 0ms',
				WebkitTransition: 'all 600ms ease 0ms',
				msTransition: 'all 600ms ease 0ms',
				OTransition: 'all 600ms ease 0ms',
				transition: 'all 600ms ease 0ms',

				zIndex: '100',
				// Added for right arrow
			}}
			onClick={onClick}>
			<FaAngleLeft />
		</div>
	);
}
