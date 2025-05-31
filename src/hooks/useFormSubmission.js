import { useState } from 'react';

export const useFormSubmission = (initialState) => {
	const [formData, setFormData] = useState(initialState);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const validate = (data) => {
		const newErrors = {};
		if (!data.name) newErrors.name = 'Name is required';
		if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
			newErrors.email = 'Valid email is required';
		}
		if (!data.phone) newErrors.phone = 'Phone is required';
		return newErrors;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		// Clear error when user types
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: null,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setIsLoading(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log('Form submitted:', formData);
			setIsSubmitted(true);
			setTimeout(() => {
				setIsSubmitted(false);
				setFormData(initialState);
			}, 3000);
		} catch (error) {
			console.error('Submission error:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formData,
		isSubmitted,
		isLoading,
		errors,
		handleInputChange,
		handleSubmit,
	};
};
