import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import NavSidebar from './NavSidebar';
import Advertisment from './Advertisement';

export default function Booksform() {
	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>

			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-10' style={{ padding: '10px' }}>
								<div className='card'>
									<div className='card-body'>
										<div>
											<h1>Book form </h1>{' '}
											<h1 style={{ color: 'red' }}>Do not delete </h1>
											<Advertisment></Advertisment>
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
