import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NewsForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [article, setArticle] = useState('');
	const [photo, setPhoto] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		// do something with the form data
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleArticleChange = (event) => {
		setArticle(event.target.value);
	};

	const handlePhotoChange = (event) => {
		setPhoto(event.target.files[0]);
	};

	return (
		<Container>
			<Row>
				<Col>
					<h2>Create News</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='formTitle'>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter news title'
								value={title}
								onChange={handleTitleChange}
							/>
						</Form.Group>

						<Form.Group controlId='formContent'>
							<Form.Label>Content</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								placeholder='Enter news content'
								value={content}
								onChange={handleContentChange}
							/>
						</Form.Group>

						<Form.Group controlId='formArticle'>
							<Form.Label>Article Log</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								placeholder='Enter article log'
								value={article}
								onChange={handleArticleChange}
							/>
						</Form.Group>

						<Form.Group controlId='formPhoto'>
							<Form.Label>Photo</Form.Label>
							<Form.Control type='file' onChange={handlePhotoChange} />
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default NewsForm;
