import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Card, Button } from 'react-bootstrap';
const AppliedJobs = () => {
	return (
		<Row>
			<Col md={4}>
				<UserProfileCard
					name='John Doe'
					email='johndoe@example.com'
					phone='123-456-7890'
					password='********'
					id='12345'
					fatherDetails='John Doe Sr.'
					location='New York, NY'
					jobDescription='Software Engineer'
				/>
			</Col>
			<Col md={4}>
				<UserProfileCard
					name='Jane Smith'
					email='janesmith@example.com'
					phone='987-654-3210'
					password='********'
					id='54321'
					fatherDetails='Bob Smith'
					location='Los Angeles, CA'
					jobDescription='Graphic Designer'
				/>
			</Col>
			<Col md={4}>
				<UserProfileCard
					name='Bob Johnson'
					email='bjohnson@example.com'
					phone='555-555-5555'
					password='********'
					id='67890'
					fatherDetails='Dave Johnson'
					location='Chicago, IL'
					jobDescription='Sales Manager'
				/>
			</Col>
		</Row>
	);
};

export default AppliedJobs;

const UserProfileCard = ({
	name,
	email,
	phone,
	password,
	id,
	fatherDetails,
	location,
	jobDescription,
}) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>{email}</Card.Subtitle>
				<Card.Text>
					<p>Phone: {phone}</p>
					<p>Password: {password}</p>
					<p>ID: {id}</p>
					<p>Father Details: {fatherDetails}</p>
					<p>Location: {location}</p>
					<p>Job Description: {jobDescription}</p>
				</Card.Text>
				<Button variant='primary'>Edit Profile</Button>
			</Card.Body>
		</Card>
	);
};
