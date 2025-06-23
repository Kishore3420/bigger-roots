import React from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useFormSubmission } from '../../hooks/useFormSubmission';

const initialFormState = {
	name: '',
	email: '',
	phone: '',
	company: '',
	product: '',
	quantity: '',
	message: '',
};

const ContactForm = () => {
	const { formData, isSubmitted, isLoading, errors, handleInputChange, handleSubmit } =
		useFormSubmission(initialFormState);

	if (isSubmitted) {
		return (
			<div className='bg-white rounded-xl shadow-lg p-8'>
				<div className='text-center py-8'>
					<CheckCircle className='h-16 w-16 text-green-600 mx-auto mb-4' />
					<h5 className='text-xl font-bold text-gray-900 mb-2'>Thank You!</h5>
					<p className='text-gray-600'>
						Your inquiry has been sent successfully. We'll get back to you within 24 hours.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-white rounded-xl shadow-lg p-8'>
			<h4 className='text-2xl font-bold text-gray-900 mb-6'>Send Inquiry</h4>

			<form onSubmit={handleSubmit} className='space-y-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
							Full Name *
						</label>
						<input
							type='text'
							id='name'
							name='name'
							required
							value={formData.name}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
								errors.name ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder='Enter your name'
						/>
						{errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
					</div>

					<div>
						<label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
							Email Address *
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							value={formData.email}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
								errors.email ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder='Enter your email'
						/>
						{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
							Phone Number *
						</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							required
							value={formData.phone}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
								errors.phone ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder='+91 98765 43210'
						/>
						{errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
					</div>

					<div>
						<label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
							Company Name
						</label>
						<input
							type='text'
							id='company'
							name='company'
							value={formData.company}
							onChange={handleInputChange}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
							placeholder='Your company name'
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label htmlFor='product' className='block text-sm font-medium text-gray-700 mb-2'>
							Product Interest *
						</label>
						<select
							id='product'
							name='product'
							required
							value={formData.product}
							onChange={handleInputChange}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
						>
							<option value=''>Select a product</option>
							<option value='makhana'>Premium Makhana</option>
							<option value='turmeric'>Pure Turmeric</option>
							<option value='nutmeg'>Nutmeg & Mace</option>
							<option value='jaggery'>Palm Jaggery</option>
							<option value='pepper'>Black Pepper</option>
							<option value='multiple'>Multiple Products</option>
						</select>
					</div>

					<div>
						<label htmlFor='quantity' className='block text-sm font-medium text-gray-700 mb-2'>
							Quantity Required
						</label>
						<input
							type='text'
							id='quantity'
							name='quantity'
							value={formData.quantity}
							onChange={handleInputChange}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
							placeholder='e.g., 1000 kg, 5 tons'
						/>
					</div>
				</div>

				<div>
					<label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						rows={4}
						value={formData.message}
						onChange={handleInputChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
						placeholder='Tell us about your requirements, destination country, etc.'
					/>
				</div>

				{/* Honeypot field for spam protection */}
				<input
					type='checkbox'
					name='botcheck'
					className='hidden'
					style={{ display: 'none' }}
					tabIndex='-1'
					autoComplete='off'
				/>

				{/* Show API error if present */}
				{errors.api && <p className='text-red-500 text-center text-sm'>{errors.api}</p>}

				<button
					type='submit'
					disabled={isLoading}
					className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors ${
						isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
					}`}
				>
					{isLoading ? (
						'Sending...'
					) : (
						<>
							<Send className='h-5 w-5 mr-2' />
							Send Inquiry
						</>
					)}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
