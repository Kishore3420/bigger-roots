import React from 'react';
import { testimonials } from '../../constants/testimonials';
import { useTestimonialRotation } from '../../hooks/useTestimonialRotation';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
	const { activeTestimonial, setActiveTestimonial } = useTestimonialRotation(testimonials);

	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h3 className='text-3xl font-bold text-gray-900 mb-4'>What Our Clients Say</h3>
					<p className='text-lg text-gray-600'>Trusted by businesses worldwide</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<TestimonialCard testimonial={testimonials[activeTestimonial]} />

					<div className='flex justify-center mt-6 space-x-2'>
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === activeTestimonial ? 'bg-green-600' : 'bg-gray-300'
								}`}
								onClick={() => setActiveTestimonial(index)}
								aria-label={`View testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
