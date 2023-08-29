import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image_1 from '../../Assets/images/Componey logos/logo11.webp';
import Image_2 from '../../Assets/images/Componey logos/logo 2.webp';
import Image_3 from '../../Assets/images/Componey logos/logo 12.webp';
import Image_4 from '../../Assets/images/Componey logos/logo 4.webp';
import Image_5 from '../../Assets/images/Componey logos/logo 5.webp';
import Image_6 from '../../Assets/images/Componey logos/logo 7.webp';
import Image_7 from '../../Assets/images/Componey logos/logo 6.webp';
import Image_8 from '../../Assets/images/Componey logos/logo 8.webp';
import Image_9 from '../../Assets/images/Componey logos/logo 9.webp';
import Image_10 from '../../Assets/images/Componey logos/logo 10.webp';

export default function Clients() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className='container pb-4 pb-md-5 mb-2 mb-md-3'>
			<Slider {...settings}>
				<div className='brand-item'>
					<img src={Image_5} alt='amity university' loading='lazy' />
				</div>

				<div className='brand-item'>
					<img src={Image_6} alt='amity university' loading='lazy' />
				</div>
				<div className='brand-item'>
					<img src={Image_7} alt='amity university' loading='lazy' />
				</div>
				<div className='brand-item'>
					<img src={Image_8} alt='amity university' loading='lazy' />
				</div>
				<div className='brand-item'>
					<img src={Image_9} alt='amity university' loading='lazy' />
				</div>
			</Slider>
		</section>
	);
}
