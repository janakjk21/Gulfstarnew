import React from 'react';
import {
	FaFacebook,
	FaGooglePlus,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import team1WebP from '../../Assets/images/Team/krishnapandey.webp';
import image2 from '../../Assets/images/about/ab3.jpg';

import team2WebP from '../../Assets/images/Team/dinesh paudel chettri.webp';
import team4WebP from '../../Assets/images/Team/Laxami Gurung - Flight.webp';
import team5WebP from '../../Assets/images/Team/dhan singh gharti -manager.webp';
import team6WebP from '../../Assets/images/Team/Bikash pariyar -Pro.webp';
import team7WebP from '../../Assets/images/Team/Nisha khatri -recption.webp';
import team8WebP from '../../Assets/images/Team/Sabina bhandari -office assistance.webp';
import team9WebP from '../../Assets/images/Team/Urmila thing-.webp';

export default function Fullaboutus() {
	const employeeData = [
		{
			name: 'Dinesh Paudel Chhetri',
			post: 'Managing Director',
			imageurl: team2WebP,
		},
		{
			name: 'Krishna Pandey',
			post: 'Executing Director',
			imageurl: team1WebP,
		},
		// Add more employee data here...
		// {
		//   name: 'suman karki',
		//   post: 'Marketing Director',
		//   imageurl: team10WebP,
		// },
		{
			name: 'Dhansing Gharti',
			post: 'Manager',
			imageurl: team5WebP,
		},

		{
			name: 'Urmila Thing',
			post: 'Admin Officer',
			imageurl: team9WebP,
		},
		{
			name: 'Laxmi Gurung',
			post: 'Flight Officer',
			imageurl: team4WebP,
		},
		{
			name: 'Nirmala Khatri',
			post: 'Receptionist',
			imageurl: team7WebP,
		},
		{
			name: 'Sabina Bhandari',
			post: 'Office Assistant',
			imageurl: team8WebP,
		},
	];
	return (
		<>
			<section
				className='pdt-110 pdb-150 section-white-typo'
				data-background='images/bg/5.jpg'
				data-overlay-dark={8}>
				<div
					className='section-title text-center wow fadeInUp'
					data-wow-delay='0ms'
					data-wow-duration='1500ms'>
					<div className='container'>
						<div className='row'>
							<div className='col' />
							<div className='col-lg-8 col-xl-6'>
								<div className='section-title-block'>
									<h5 className='text-primary-color anim-box-objects line-both-side mrb-15'>
										Meet Our Team
									</h5>
									<h2>We Have a Professional Team</h2>
								</div>
							</div>
							<div className='col' />
						</div>
					</div>
				</div>
			</section>
			<section
				className='pdt-105 pdb-80 position-relative z-index-2'
				data-background='images/bg/abs-bg1.png'>
				<div className='section-content'>
					<div className='container'>
						<div className='row' style={{ justifyContent: 'center' }}>
							{employeeData.slice(0, 2).map((employee, index) => (
								<SingleTeam
									name={employee.name}
									post={employee.post}
									imageurl={employee.imageurl}
									key={index} // Don't forget to add a unique key
								/>
							))}
						</div>
					</div>

					<div className='container'>
						<div className='row'>
							{employeeData.slice(2, 8).map((employee, index) => (
								<SingleTeam
									name={employee.name}
									post={employee.post}
									imageurl={employee.imageurl}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const SingleTeam = ({ name, post, imageurl }) => {
	return (
		<div className='col-md-6 col-lg-6 col-xl-4'>
			<div className='team-block mrb-30'>
				<div className='team-upper-part'>
					<img className='img-full' src={imageurl} alt='' />
				</div>
				<div className='team-bottom-part'>
					<h4 className='team-title mrb-5'>
						<a href='page-single-team.html'>{name}</a>
					</h4>
					<h6 className='designation'>{post}</h6>
					<ul className='social-list vertical-style list-sm'>
						<li>
							<a href='#'>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaGooglePlus />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
