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
			// Prepare data for Web3Forms
			const payload = {
				access_key: '01f3685d-1306-469a-8349-5f95346a4204',
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				company: formData.company,
				product: formData.product,
				quantity: formData.quantity,
				message: formData.message,
				botcheck: '', // honeypot field for spam protection
			};

			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const result = await response.json();

			if (result.success) {
				setIsSubmitted(true);
				setTimeout(() => {
					setIsSubmitted(false);
					setFormData(initialState);
				}, 3000);
			} else {
				setErrors({ api: result.message || 'Submission failed. Please try again.' });
			}
		} catch (error) {
			console.error('Submission error:', error);
			setErrors({ api: 'Submission failed. Please try again.' });
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
