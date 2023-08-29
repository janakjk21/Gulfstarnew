import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { db } from '../fire';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLocationPlus } from 'react-icons/bi';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { doc, deleteDoc } from 'firebase/firestore';

const JobForm = () => {
	const [jobTitle, setJobTitle] = useState('');
	const [location, setLocation] = useState('');
	const [company, setCompany] = useState('');
	const [category, setCategory] = useState('');
	const [salary, setSalary] = useState('');
	const [closingDate, setClosingDate] = useState('');
	const [details, setDetails] = useState('');

	const [showAlert, setShowAlert] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// handle form submission
	};

	const createData = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, 'createjobs'), {
				jobTitle,
				location,
				company,
				category,
				salary,
				closingDate,
				details,
			}).then(setShowAlert(true));
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				{showAlert && (
					<Alert
						variant='success'
						onClose={() => setShowAlert(false)}
						dismissible>
						Job has been created
					</Alert>
				)}
				<Form.Group controlId='formJobTitle'>
					<Form.Label>Job Title</Form.Label>
					<Form.Control
						type='text'
						value={jobTitle}
						onChange={(e) => setJobTitle(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formLocation'>
					<Form.Label>Location</Form.Label>
					<Form.Control
						type='text'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formCompany'>
					<Form.Label>Company</Form.Label>
					<Form.Control
						type='text'
						value={company}
						onChange={(e) => setCompany(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formCategory'>
					<Form.Label>Category</Form.Label>
					<Form.Control
						type='text'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formSalary'>
					<Form.Label>Salary</Form.Label>
					<Form.Control
						type='text'
						value={salary}
						onChange={(e) => setSalary(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formClosingDate'>
					<Form.Label>Closing Date</Form.Label>
					<Form.Control
						type='date'
						value={closingDate}
						onChange={(e) => setClosingDate(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formDetails'>
					<Form.Label>Details</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						value={details}
						onChange={(e) => setDetails(e.target.value)}
					/>
				</Form.Group>

				<Button
					variant='primary'
					type='submit'
					onClick={(e) => {
						createData(e);
					}}>
					Submit
				</Button>
			</Form>
			<DeleteJobs></DeleteJobs>
		</>
	);
};

export default JobForm;

const DeleteJobs = () => {
	const [jobs, setJobs] = useState([]);
	const [deletealert, setdeletealert] = useState(false);
	const getjobs = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'createjobs'));
		querySnapshot.forEach((doc) => {
			console.log(doc.id);
			let docid = doc.id;
			let appObj = { docid, ...doc.data() };
			newarr.push(appObj);
		});
		setJobs(newarr);
	};
	useEffect(() => {
		getjobs();
	}, [deletealert]);

	const deletedata = (id, e) => {
		e.preventDefault();
		const docRef = doc(db, 'createjobs', id);
		deleteDoc(docRef)
			.then(() => {
				setdeletealert(true);
				console.log('Entire Document has been deleted successfully.');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div
			className='row g-4 gallery bg-secondary'
			data-video='true'
			style={{ padding: '20px', marginTop: '50px' }}>
			<h1> Delete Jobs </h1>
			{deletealert && (
				<Alert
					variant='danger'
					onClose={() => setdeletealert(false)}
					dismissible>
					Job has been Delete
				</Alert>
			)}
			{jobs.length > 0 ? (
				jobs.map((item, id) => {
					return (
						<div className='col-xl-4 col-sm-6' key={item.docid}>
							<div className='card  card-hover'>
								<div className='card-body'>
									<div className='d-flex justify-content-between align-items-start mb-2'>
										<div className='d-flex align-items-center'>
											<h3 className='h6 card-title pt-1 mb-3'>
												Job Title:
												<span className='fs-md text-dark opacity-100 px-1'>
													{item.jobTitle}
												</span>{' '}
											</h3>
											<h3 className='h6 card-title pt-1 mb-3'>
												<span className='fs-md text-dark opacity-80 px-1'>
													Company: {item.company}
												</span>
											</h3>
										</div>
										<div className='dropdown content-overlay'>
											<button
												type='button'
												className='btn btn-icon btn-light btn-xs rounded-circle shadow-sm'
												id='contextMenu'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												<BsThreeDotsVertical className='fi-dots-vertical'></BsThreeDotsVertical>
											</button>
										</div>
									</div>
									<span className='fs-md text-info opacity-90 px-1 rounded-pill bg-faded-info badge'>
										Job Category:{item.category}
									</span>
									<span className='text-nowrap me-3 rounded-pill bg-faded-success badge'>
										<BiLocationPlus></BiLocationPlus>Location:
										{item.location}
									</span>
									<div className='fs-sm mt-3'>
										<span className='text-nowrap me-3'>
											<HiOutlineCurrencyRupee className='fi-cash fs-base text-muted me-1'></HiOutlineCurrencyRupee>
											Salary:{item.salary}
										</span>
										<span className='badge bg-faded-accent rounded-pill fs-sm ms-2'>
											closingDate:{item.closingDate}
										</span>
									</div>{' '}
									<button
										className='btn btn-primary btn-lg rounded-pill ms-sm-auto mt-5'
										onClick={(e) => {
											deletedata(item.docid, e);
										}}>
										Delete Job
									</button>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<>
					<h1> No Jobs Available</h1>
				</>
			)}
		</div>
	);
};
