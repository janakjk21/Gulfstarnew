import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../fire'; // Import your Firebase configuration
import NavSidebar from './NavSidebar';

const FAQForm = ({ data }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Create a new FAQ document in Firestore
		try {
			const faqRef = collection(db, 'Faq'); // 'Faq' should be the collection name in your Firestore
			await addDoc(faqRef, {
				title,
				content,
			});

			// Clear the form fields
			setTitle('');
			setContent('');
			console.log('FAQ data added to Firestore');
		} catch (error) {
			console.error('Error adding FAQ data: ', error);
		}
	};

	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>
			{/* Your other components for navigation and layout */}
			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-10' style={{ padding: '10px' }}>
								<div className='card'>
									<div className='card-body'>
										<div>
											<h1>FAQ Form</h1>
											<form onSubmit={handleSubmit}>
												<div className='mb-3'>
													<label htmlFor='title' className='form-label'>
														Title
													</label>
													<input
														type='text'
														id='title'
														className='form-control'
														value={title}
														onChange={(e) => setTitle(e.target.value)}
													/>
												</div>

												<div className='mb-3'>
													<label htmlFor='content' className='form-label'>
														Content
													</label>
													<textarea
														id='content'
														className='form-control'
														value={content}
														onChange={(e) => setContent(e.target.value)}
													/>
												</div>

												<button type='submit' className='btn btn-primary'>
													Submit
												</button>
											</form>
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
};



export default FAQForm;
