import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
	return (
		<div
			className='sidebar-widget bg-gradient-color text-center'
			data-background='images/bg/abs-bg4.png'>
			<div className='contact-information'>
				<h3 className='text-white mrb-20'>Contact Us</h3>
				<p className='text-white'>
					If you have any queries about our service, please contact us.
				</p>
				<ul className='list-items text-white mrb-20'>
					<li>
						<FaPhone className='mrr-10' />
						+977 9801070016
					</li>
					<li>
						<FaGlobe className='mrr-10' />
						Samakhushi 10, Kathmandu 44600, Nepal
					</li>
					<li>
						<FaEnvelope className='mrr-10' />
						gulfstaroverseas@gmail.com
					</li>
				</ul>
				<a href='tel:+9779801070016' className='cs-btn-one btn-light mrt-15'>
					<FaPhone className='mrr-10' />
					Call Now
				</a>
			</div>
		</div>
	);
};

export default ContactInfo;
