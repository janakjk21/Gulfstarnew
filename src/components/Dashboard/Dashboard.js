import React, { useEffect, useState } from 'react';

import Content1 from './Content1';
import '../../Assets/css/app-modern.min.css';
import NavSidebar from './NavSidebar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../fire';
import { redirect } from 'react-router-dom';
import Jobadvertisement from './Jobadvertisement';
export default function Dashboard() {
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				return redirect('/dashboard');
				// ...
			} else {
				// User is signed out
				return redirect('/');
				// ...
			}
		});
	}, []);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768); // You can adjust the breakpoint
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className='wrapper'>
			<NavSidebar />
			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-12 col-lg-8' style={{ padding: '10px' }}>
								<div className='card'>
									<div className='card-body'>
										<div>
											<h1>Job Advertisements</h1>
											<Jobadvertisement />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
