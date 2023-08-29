import React from 'react';

import ModalImage from 'react-modal-image';
import img1 from '../../Assets/images/officedocuments/iso new.jpg';
import img2 from '../../Assets/images/officedocuments/jitco.jpg';
import img3 from '../../Assets/images/officedocuments/Pan.jpg';
import img4 from '../../Assets/images/officedocuments/componey darta.jpg';
import img5 from '../../Assets/images/officedocuments/ijajat patra.jpg';
import img6 from '../../Assets/images/officedocuments/RBA.jpg';

export default function Demand() {
	return (
		<div
			style={{
				backgroundColor: 'rgb(237,237,237)',
			}}>
			<section className='our-team-area-wrapper section-top-space section-bottom-space'>
				<div className='our-team-inner'>
					<div className='container custom-container-01'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'></div>
						</div>
						<div className='row column-gap-50'>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img1} title={'licence'} />
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img2} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img3} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img4} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img6} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img5} title={'licence'}></Singleemploye>
							</div>
							{/* Other columns... */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

const Singleemploye = ({ image, title }) => {
	return (
		<div className='col' style={{ margin: '4px' }}>
			<div className='card border-0 shadow-sm'>
				<ModalImage
					small={image}
					large={image}
					alt={title}
					hideDownload={true}
					hideZoom={true}
					className='card-img-top'
				/>
				<div className='card-body text-center'>
					<h3 className='h5 card-title mb-2'>{title}</h3>
					<div className='pt-1'></div>
				</div>
			</div>
		</div>
	);
};
