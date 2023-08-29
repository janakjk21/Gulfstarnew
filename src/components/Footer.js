import React from 'react';
// import './footer.css';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaGooglePlusG,
	FaYoutube,
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<footer>
				<div
					className='footer-main-area'
					data-background='images/footer-bg.png'>
					<div className='container'>
						<div className='row'>
							{/* Contact Information */}
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h3>Gulf Star Overseas</h3>
									<address className='mrb-25'>
										<p className='text-light-gray'>
											Samakhushi 10 <br />
											Kathmandu 44600
											<br />
											<br />
											<strong>Phone:</strong> +977 9801070016
											<br />
											<strong>Email:</strong> gulfstaroverseas@gmail.com
											<br />
										</p>
										<div className='social-links mt-3 m-2'>
											<Link
												to='https://www.facebook.com/gulfstaroverseas.com.np/'
												className='twitter m-1'>
												<FaFacebook />
											</Link>
											<Link
												to='https://www.facebook.com/gulfstaroverseas.com.np/'
												className='youtube m-1'>
												<FaYoutube />
											</Link>
											<Link
												to='https://www.facebook.com/gulfstaroverseas.com.np/'
												className='instagram m-1'>
												<FaTwitter />
											</Link>
											<Link
												to='https://www.facebook.com/gulfstaroverseas.com.np/'
												className='linkedin m-1'>
												<FaLinkedin />
											</Link>
										</div>
									</address>
								</div>
							</div>
							{/* Useful Links */}
							<div className='col-xl-2 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h5 className='widget-title text-white mrb-30'>
										Useful Links
									</h5>
									<ul className='footer-widget-list'>
										<li>
											<a href='#'>Home</a>
										</li>
										<li>
											<a href='#'>About</a>
										</li>
										<li>
											<a href='#'>Team</a>
										</li>
										<li>
											<a href='#'>Service</a>
										</li>
										<li>
											<a href='#'>News</a>
										</li>
										<li>
											<a href='#'>Policy</a>
										</li>
										<li>
											<a href='#'>Contact</a>
										</li>
									</ul>
								</div>
							</div>
							{/* Services */}
							<div className='col-xl-2 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h5 className='widget-title text-white mrb-30'>Services</h5>
									<ul className='footer-widget-list'>
										<li>
											<a href='#'>Home</a>
										</li>
										<li>
											<a href='#'>About</a>
										</li>
										<li>
											<a href='#'>Team</a>
										</li>
										<li>
											<a href='#'>Service</a>
										</li>
										<li>
											<a href='#'>News</a>
										</li>
										<li>
											<a href='#'>Policy</a>
										</li>
										<li>
											<a href='#'>Contact</a>
										</li>
									</ul>
								</div>
							</div>
							{/* Newsletter */}
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h5 className='widget-title text-white mrb-30'>Newsletter</h5>
									<p className='text-light-gray'>
										Subscribe to our newsletter to get regular updates on
										Manpower industry of nepal.
									</p>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Your Email'
									/>
									<a
										href='#'
										className='cs-btn-one btn-gradient-color btn-sm has-icon mrt-20'>
										<i className='webexflaticon flaticon-send' />
										Submit Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Footer Bottom */}
				<div className='footer-bottom-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-12'>
								<div className='text-center'>
									<span className='text-light-gray'>
										Copyright © 2020 by <FaGithub></FaGithub>
										<Link
											className='text-primary-color'
											to='https://github.com/janakjk21'>
											{' '}
											Janak Sapkota
										</Link>{' '}
										| All rights reserved{' '}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
