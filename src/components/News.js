import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../fire';
import Pagetitle from './Pagetitle';
import Nav from './Nav';
import Footer from './Footer';

export default function News() {
	const [news, setNews] = useState([]);

	const getnews = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'Advertisment'));
		querySnapshot.forEach((doc) => {
			let appObj = { ...doc.data(), id: doc.id };
			newarr.push(appObj);
		});
		newarr.sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis());
		setNews(newarr);
	};

	useEffect(() => {
		getnews();
	}, []);

	const pageTitle = 'All advertisement';

	const breadcrumbs = [
		{ label: 'Home', link: '/' },
		{ label: 'Advertisement' },
	];

	return (
		<div>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			{news.length > 0 ? (
				news.map((item) => {
					const timestamp =
						item.timestamp && item.timestamp instanceof Date
							? item.timestamp
							: item.timestamp?.toDate?.() || new Date(); // Use a default date if undefined

					return (
						<div
							className='container d-flex justify-content-center mt-5'
							key={item.id}>
							<div
								className='card'
								style={{
									maxWidth: '70%',
									boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
								}}>
								<img
									src={item.imgUrl}
									className='card-img-top'
									style={{ width: '100%', objectFit: 'cover' }}
									alt='news'
								/>
								<div className='card-body'>
									<h1 className='card-title'>{item.newsTitle}</h1>
									<p className='card-text'>{timestamp.toLocaleString()}</p>
									<p className='card-text'>{item.news}</p>
									{/* Additional content if needed */}
								</div>
							</div>
						</div>
					);
				})
			) : (
				<div>No news available</div>
			)}
			<Footer></Footer>
		</div>
	);
}
