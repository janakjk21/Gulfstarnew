import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import {
	AiOutlineHome,
	AiOutlineCalendar,
	AiOutlineComment,
	AiOutlineDashboard,
	AiOutlineSolution,
} from 'react-icons/ai';
import logo from '../../Assets/images/logo3-FINAL.webp';
import { position } from '@chakra-ui/react';

export default function Sidebar() {
	return (
		<div
			className='leftside-menu '
			style={{
				backgroundColor: '#313A46',
				color: '#ffffff',
			}}>
			{/* Brand Logo Light */}
			<Link to='/' className='logo logo-light'>
				<span className='logo-lg'>
					<img src={logo} alt='logo' />
				</span>
				<span className='logo-sm'>
					<img src={logo} alt='small logo' />
				</span>
			</Link>
			{/* Brand Logo Dark */}
			<Link to='/' className='logo logo-dark'>
				<span className='logo-lg'>
					<img src={logo} alt='dark logo' />
				</span>
				<span className='logo-sm'>
					<img src={logo} alt='small logo' />
				</span>
			</Link>
			{/* Sidebar Hover Menu Toggle Button */}
			<div
				className='button-sm-hover'
				data-bs-toggle='tooltip'
				data-bs-placement='right'
				title='Show Full Sidebar'>
				<i className='ri-checkbox-blank-circle-line align-middle' />
			</div>
			{/* Full Sidebar Menu Close Button */}
			<div className='button-close-fullsidebar'>
				<i className='ri-close-fill align-middle' />
			</div>
			{/* Sidebar -left */}
			<Sidebar1></Sidebar1>
		</div>
	);
}

const Sidebar1 = () => {
	return (
		<div className='h-100' id='leftside-menu-container' data-simplebar>
			<ul className='side-nav'>
				<li className='side-nav-title'>Navigation</li>
				<li className='side-nav-item'>
					<Link to='/dashboard' className='side-nav-link'>
						<AiOutlineDashboard />
						<span className='badge bg-success float-end'>5</span>
						<span> Dashboards </span>
					</Link>
				</li>
				{/* ... Other links ... */}
				<li className='side-nav-title'>Apps</li>

				<li className='side-nav-item'>
					<Link to='/faqform' className='side-nav-link'>
						<AiOutlineComment />
						<span> Faq Question</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link
						to='/dashboard'
						className='side-nav-link'
						data-bs-toggle='collapse'
						data-bs-target='#sidebarCrm'
						aria-expanded='false'
						aria-controls='sidebarCrm'>
						<AiOutlineSolution />
						<span className='badge bg-danger text-white float-end'>New</span>
						<span>
							{' '}
							<li>
								<Link to='/bookform'>Advertisement Long Form</Link>
							</li>
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};
