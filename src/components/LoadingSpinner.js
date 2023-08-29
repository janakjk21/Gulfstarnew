import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner() {
	return (
		<div>
			<Spinner animation='grow' size='sm' />
			<Spinner animation='grow' />
		</div>
	);
}
