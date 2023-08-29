import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../fire';

export default function ModalE() {
	const [show, setShow] = useState(false);
	const [advertisement, setAdvertisement] = useState([]);
	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	useEffect(() => {
		const fetchAdvertisement = async () => {
			const querySnapshot = await getDocs(collection(db, 'jobAdvertisement'));
			let newarr = querySnapshot.docs.map((doc) => ({
				docid: doc.id,
				...doc.data(),
			}));
			setAdvertisement(newarr);
		};

		fetchAdvertisement();
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (advertisement.length > 0) {
				setShow(true);
			} else {
				setShow(false);
			}
		}, 1000); // 10 seconds

		return () => clearTimeout(timer);
	}, [advertisement]);

	return (
		<>
			{/* <Button variant='primary' onClick={handleShow}>
				Launch demo modal
			</Button> */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Jobs </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{advertisement.map((item, index) => {
						return (
							<img
								src={item.imgUrl}
								alt='ads for the job posting'
								key={index}></img>
						);
					})}
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
