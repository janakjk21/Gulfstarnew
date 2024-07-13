import { useEffect, useState } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	serverTimestamp,
} from 'firebase/firestore';
import { db, storage } from '../../fire';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Alert } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Employes() {
	const [blogPost, setBlogPost] = useState({
		title: '',
		author: {
			name: '',
			email: '',
		},
		date: '',
		content: '',
	});
	const [showAlert, setShowAlert] = useState(false);

	const [imgUrl, setImgUrl] = useState(null);
	const [progresspercent, setProgresspercent] = useState(0);
	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if (name === 'name' || name === 'email') {
			setBlogPost({
				...blogPost,
				author: {
					...blogPost.author,
					[name]: value,
				},
			});
		} else {
			setBlogPost({
				...blogPost,
				[name]: value,
			});
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// Check if imgUrl is null
		if (!imgUrl) {
			alert('Please upload an image before submitting the form.');
			return; // Return early to prevent further form submission
		}

		try {
			const docRef = await addDoc(collection(db, 'jobAdvertisement'), {
				blogPost,
				imgUrl,
				timestamp: serverTimestamp(),
			});
			setShowAlert(true);
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	const uploadimage = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		console.log(file.name);
		if (!file) return;
		const storageRef = ref(storage, `/Blogposts/${file.name}`);
		// uploadBytes(storageRef, file).then((snapshot) => {
		// 	console.log('Uploaded a blob or file!', snapshot);
		// });
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgresspercent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgUrl(downloadURL);
					console.log(downloadURL);
				});
			}
		);
	};

	return (
		<>
			<Form>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='text'
						name='title'
						value={blogPost.title}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='authorName'>
					<Form.Label>Author Name</Form.Label>
					<Form.Control
						type='text'
						name='name'
						value={blogPost.author.name}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='authorEmail'>
					<Form.Label>Author Email</Form.Label>
					<Form.Control
						type='email'
						name='email'
						value={blogPost.author.email}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='date'>
					<Form.Label>Date</Form.Label>
					<Form.Control
						type='date'
						name='date'
						value={blogPost.date}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='content'>
					<Form.Label>Content</Form.Label>
					<Form.Control
						as='textarea'
						rows={5}
						name='content'
						value={blogPost.content}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId='formFileSm' className='mb-3'>
					<Form.Label>Choose a image to upload </Form.Label>
					{progresspercent > 0 && <div>{progresspercent}% uploaded</div>}
					<Form.Control
						type='file'
						size='sm'
						onChange={(e) => {
							uploadimage(e);
						}}
					/>
				</Form.Group>
				<Button
					variant='primary'
					type='submit'
					onClick={(e) => {
						handleFormSubmit(e);
					}}>
					Submit
				</Button>
				{showAlert && (
					<Alert variant='success' onClose={() => showAlert(false)} dismissible>
						Advertisment created successfully
					</Alert>
				)}
			</Form>
			<DeleteJobs />
		</>
	);
}

export default Employes;

const DeleteJobs = () => {
	const [jobs, setJobs] = useState([]);
	const [deletealert, setdeletealert] = useState(false);
	const getjobs = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'jobAdvertisement'));
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
		const docRef = doc(db, 'jobAdvertisement', id);
		deleteDoc(docRef)
			.then(() => {
				setdeletealert(true);
				console.log('Entire Document has been deleted successfully.');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	console.log('jobs', jobs);
	return (
		<>
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
						console.log(item.blogPost);
						return (
							<div className='col-xl-4 col-sm-6' key={item.docid}>
								<div className='card  card-hover'>
									<div className='card-body'>
										<div className='d-flex justify-content-between align-items-start mb-2'>
											<div className='d-flex align-items-center'>
												<h3 className='h6 card-title pt-1 mb-3'>
													Job Title:{item.blogPost.title}
													<span className='fs-md text-dark opacity-100 px-1'></span>{' '}
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
										<div className='fs-sm mt-3'>
											<span className=' text-info  fs-sm ms-2'>
												{' '}
												<p> {item.blogPost.content}</p>
												<img src={item.imgUrl} alt='ads images'></img>
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
		</>
	);
};
