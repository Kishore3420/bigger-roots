import { useEffect, useState } from 'react';

export const useTestimonialRotation = (testimonials, interval = 5000) => {
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, interval);
		return () => clearInterval(timer);
	}, [testimonials.length, interval]);

	return { activeTestimonial, setActiveTestimonial };
};
