import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
	return (
		<section id='contact' className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h3 className='text-3xl font-bold text-gray-900 mb-4'>Get in Touch</h3>
					<p className='text-lg text-gray-600'>
						Ready to place an order or have questions? We're here to help!
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
