import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className='bg-green-50 rounded-xl p-8 text-center'>
			<div className='flex justify-center mb-4'>
				{[...Array(testimonial.rating)].map((_, i) => (
					<Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
				))}
			</div>
			<p className='text-lg text-gray-700 mb-6 italic'>"{testimonial.text}"</p>
			<div>
				<div className='font-bold text-gray-900'>{testimonial.name}</div>
				<div className='text-gray-600'>{testimonial.company}</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
