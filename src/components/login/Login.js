import React, { useState } from 'react';
import contactus_background from '../../Assets/images/bg/vid.jpg';
import Nav from '../Nav';
import './login.css';
import { db, auth } from '../../fire.js';
import { redirect, useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { useEffect } from 'react';
export default function Login() {
	const [userIsInactive, setUserIsInactive] = useState(false);

	return (
		<>
			<Nav></Nav>
			<Formsection user={setUserIsInactive}></Formsection>;
		</>
	);
}

const Formsection = ({ user }) => {
	const [signIn, setSignIn] = useState(true);
	const [name, setName] = useState(''); // State for name input
	const [email, setEmail] = useState(''); // State for email input
	const [password, setPassword] = useState(''); // State for password input
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const slide = () => {
		setSignIn(!signIn);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSignIn = async (event) => {
		event.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate('/dashboard');
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorMessage);
			});
	};
	const handleSignUp = async (event) => {
		event.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
	console.log(email, password);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				background: '#42495D',
			}}>
			<div className='App'>
				<div className='Panel FormPanel'>
					<h2>{signIn ? 'Sign in' : 'Create account'}</h2>
					<div className='Social'>{/* Social icons */}</div>
					<p>Or use your email account</p>
					<form>
						{/* Email and Password input fields */}
						{signIn || (
							<input
								type='text'
								placeholder='Name'
								value={name}
								onChange={handleNameChange}
							/>
						)}
						<input
							type='text'
							placeholder='Email'
							value={email}
							onChange={handleEmailChange}
						/>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={handlePasswordChange}
						/>
					</form>
					{error && <p className='danger'>{error}</p>}
					<a href='#'>Forgot your password?</a>
					<button onClick={signIn ? handleSignIn : handleSignUp}>
						{signIn ? 'Sign in' : 'Sign up'}
					</button>
				</div>

				<div className='Panel ActionPanel'>
					<h2>{signIn ? 'Hello friend!' : 'Welcome back!'}</h2>
					<p>
						{signIn
							? 'Enter your personal details and start your journey with us'
							: 'To keep connected with us please login with your personal info'}
					</p>
					<button onClick={slide}>{signIn ? 'Sign up!' : 'Sign in!'}</button>
				</div>
			</div>
		</div>
	);
};
