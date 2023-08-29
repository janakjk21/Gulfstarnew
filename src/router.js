import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Hero';
import React from 'react';
import './Assets/css/style.css';
import { lazy } from 'react';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const Aboutus = lazy(() => import('./components/Aboutus/Aboutus'));
const Consulting = lazy(() => import('./components/Consulting/Consulting'));
const CaseStudy = lazy(() => import('./components/CaseStudy/CaseStudy'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Faqfullpage = lazy(() => import('./components/FAQ/Faqfullpage'));
const Login = lazy(() => import('./components/login/Login'));
const FAQForm = lazy(() => import('./components/Dashboard/FAQForm '));
const Booksform = lazy(() => import('./components/Dashboard/Booksform'));
const News = lazy(() => import('./components/News'));
const Notfound = lazy(() => import('./components/Notfound'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Home />
			</Suspense>
		),
	},
	{
		path: '/aboutus',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Aboutus />
			</Suspense>
		),
	},
	{
		path: '/faqfullpage',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Faqfullpage />
			</Suspense>
		),
	},
	{
		path: '/process',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Consulting Title='Finance Consulting' />
			</Suspense>
		),
	},
	{
		path: '/Recrument',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<CaseStudy />
			</Suspense>
		),
	},
	{
		path: '/dashboard',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Dashboard />
			</Suspense>
		),
	},
	{
		path: '/login',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Login />
			</Suspense>
		),
	},
	{
		path: '/faqform',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<FAQForm />
			</Suspense>
		),
	},
	{
		path: '/bookform',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Booksform />
			</Suspense>
		),
	},
	{
		path: '/advertisement',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<News />
			</Suspense>
		),
	},
	{
		path: '*',
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Notfound />
			</Suspense>
		),
	},
]);
