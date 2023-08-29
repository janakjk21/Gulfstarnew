import React from 'react';
import Frame from 'react-frame-component';
const IframeWrapper = () => {
	return (
		<Frame
			style={{
				width: '100%',
				height: '500px',
			}}>
			<iframe
				src='https://maps.google.com/maps?q=gulfstar%20overseas&t=&z=13&ie=UTF8&iwloc=&output=embed'
				width='100%'
				height='100%'
				title='Google Maps'
				className='img-full d-none d-lg-block'
			/>
		</Frame>
	);
};

export default IframeWrapper;
