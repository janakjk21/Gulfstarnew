import React from 'react';

export default function Applyprocess() {
	const data = [
		{
			stepNumber: '01',
			title: 'Pre Labor Approval',
			content:
				'After receiving the authorized Demand Letter from the respective company, the documents are presented for pre-labor approval. The Department of Labor in Nepal analyzes the documents and approves them for further processing.',
		},
		{
			stepNumber: '02',
			title: 'Advertisement',
			content:
				'The Demand Letter which is approved from the Labor Department of Nepal is published in National daily/weekly newspapers for collecting documents. Gulf Star Overseas Pvt. Ltd. uses different tools like the Internet, SMS, telephone, etc. to inform and collect documents.',
		},
		{
			stepNumber: '03',
			title: 'Communications',
			content:
				'Departments of Gulf Star Overseas Pvt. Ltd. are fully computerized and networked to provide clients and candidates with the best and prompt service. Staff members are always committed and ready to help clients with quality manpower service.',
		},
		{
			stepNumber: '04',
			title: 'Candidate Screening/Interview',
			content:
				'Gulf Star Overseas Pvt. Ltd. maintains an up-to-date data bank of potential candidates with information about their skills, education, technical knowledge, and experience. Shortlisted candidates undergo a pre-interview, followed by a final interview conducted by the employer or their representative.',
		},
		{
			stepNumber: '05',
			title: 'Medical Checkup',
			content:
				'Selected candidates undergo a full medical examination at a medical center authorized by the government of Nepal. Physically and mentally fit candidates are eligible to sign the employment contract and proceed with further visa procedures.',
		},
		{
			stepNumber: '06',
			title: 'Visa Processing',
			content:
				'Necessary documents such as passport copies, photographs, medical reports, and experience certificates are sent to the employer for further visa processing.',
		},
		{
			stepNumber: '07',
			title: 'Orientation',
			content:
				'After receiving the job offer or employment visa, candidates attend orientation classes organized by a government-registered technical institute in Nepal. The classes provide information about laws, immigration policies, religion, and company details.',
		},
		{
			stepNumber: '08',
			title: 'Final Labor Approval',
			content:
				'All necessary documents are submitted to the Labor Department of Nepal for final approval and immigration clearance. The Department of Labor analyzes the documents and provides the final approval.',
		},
	];

	return (
		<div>
			<section className='container mb-5 pb-2 pb-lg-5'>
				<h2 className='h3 mb-4 pb-sm-2'>How it works</h2>

				<div className='row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-sm-5 gy-3'>
					{data.map((step, index) => (
						<InfoCard
							key={index}
							number={index}
							title={step.title}
							description={step.content}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

const InfoCard = ({ number, title, description }) => {
	return (
		<div className='col'>
			<div className='card border-0 shadow-sm position-relative h-100'>
				<div className='card-body'>
					<div className='h2 mb-2 text-primary'>{number}</div>
					<h3 className='h5 card-title mb-2'>{title}</h3>
					<p className='card-text fs-sm'>{description}</p>
				</div>
				{/* Arrow */}
				<svg
					className='position-absolute top-0 end-0 mt-n2 d-sm-block d-none'
					xmlns='http://www.w3.org/2000/svg'
					width={78}
					height={30}
					fill='none'
					style={{ transform: 'translateY(-100%) translateX(70%)' }}>
					<path
						d='M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062'
						fill='#fd5631'
					/>
				</svg>
			</div>
		</div>
	);
};
