import React, { useRef, useEffect, useState } from 'react';
import aboutuus1 from '../../Assets/images/1-min-min_2.webp';
import { FaUser, FaThumbsUp, FaTrophy, FaBriefcase } from 'react-icons/fa';
import CountUp from 'react-countup';
export default function Feature_Sectionaboutus() {
	const iconSize = 50; // You can adjust the size as needed
	const iconColor = ' #0E90D5'; // You can use any valid color value

	const funFactRefs = useRef([]);
	const [shouldStartCountUp, setShouldStartCountUp] = useState([]);

	const observer = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = funFactRefs.current.indexOf(entry.target);
					if (index !== -1) {
						setShouldStartCountUp((prev) => {
							const updatedArray = [...prev];
							updatedArray[index] = true;
							return updatedArray;
						});
					}
				}
			});
		});

		funFactRefs.current.forEach((ref) => {
			observer.current.observe(ref);
		});

		return () => {
			observer.current.disconnect();
		};
	}, []);
	return (
		<>
			{/* Feature Section End */}
			{/* About Section Start */}
			<section className='about-section anim-object pdt-110 pdb-50 pdb-lg-80'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-12 col-xl-6'>
							<div className='about-image-block mrb-lg-60'>
								<img className='img-full' src={aboutuus1} alt='' />
							</div>
						</div>
						<div className='col-md-12 col-xl-6'>
							<h2 className='title-under-line mrb-70'>
								We have 15+{' '}
								<span className='f-weight-400'>
									Years Recruting Experiences
								</span>
							</h2>
							<h5 className='mrb-30 text-primary-color'>About us</h5>
							<p className='mrb-40'>
								GulfStar Overseas Pvt. Ltd. is a leading human resource
								consultancy firm, providing unparalleled services to both
								clients and candidates. Our firm is registered under the
								Department of Labor, Government of Nepal with License Number
								1011/068/069, and we have been reinforced by extensive
								experience in the Gulf countries, such as UAE, KSA, Qatar,
								Kuwait, Bahrain, and Malaysia. With a passion for successful
								recruitment, our team is dedicated to understanding and
								appreciating the unique requirements of both clients and
								candidates. We validate every candidate and every requirement
								through a rigorous documentation process, ensuring that we only
								work with quality candidates and requirements. Our staff is
								trained to efficiently handle all aspects of manpower
								mobilization, screening, and documentation, providing a
								comprehensive and personal recruitment service Get life-time
								free access with one time payment in our courses plan. Easy &
								simple! We find the expert tuotor with huge teaching experience
								We present worldclass courses with practical learning tasks that
								make students more confident.
							</p>
							<div className='signature mrb-30'>
								{/* <img src='images/about/signature.png' alt='' /> */}
							</div>
							<a href='#' className='cs-btn-one btn-gradient-color btn-lg'>
								Read More
							</a>
						</div>
					</div>
					<div className='row mrt-100 mrt-lg-90 pt-5'>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[0] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[0] = el)}>
								<div className='icon'>
									<FaUser size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[0] ? 0 : null}
									end={4000}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Happy Customers</h5>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[1] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[1] = el)}>
								<div className='icon'>
									<FaThumbsUp size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[1] ? 0 : null}
									end={8000}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Peoples Likes</h5>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[2] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[2] = el)}>
								<div className='icon'>
									<FaTrophy size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[2] ? 0 : null}
									end={150}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Awards Achieved</h5>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[3] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[3] = el)}>
								<div className='icon'>
									<FaBriefcase size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[3] ? 0 : null}
									end={50}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Experiences</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
