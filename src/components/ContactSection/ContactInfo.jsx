import React from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactInfo = () => {
	return (
		<div>
			<h4 className='text-2xl font-bold text-gray-900 mb-8'>Contact Information</h4>

			<div className='space-y-6'>
				<div className='flex items-start space-x-4'>
					<Phone className='h-6 w-6 text-green-600 mt-1' />
					<div>
						<div className='font-semibold text-gray-900'>Phone</div>
						<div className='text-gray-600'>+91 98765 43210</div>
						<div className='text-gray-600'>+91 87654 32109</div>
					</div>
				</div>

				<div className='flex items-start space-x-4'>
					<Mail className='h-6 w-6 text-green-600 mt-1' />
					<div>
						<div className='font-semibold text-gray-900'>Email</div>
						<div className='text-gray-600'>info@biggerrootsexim.com</div>
						<div className='text-gray-600'>exports@biggerrootsexim.com</div>
					</div>
				</div>

				<div className='flex items-start space-x-4'>
					<MapPin className='h-6 w-6 text-green-600 mt-1' />
					<div>
						<div className='font-semibold text-gray-900'>Address</div>
						<div className='text-gray-600'>
							123 Export Plaza, Business District
							<br />
							New Delhi, India - 110001
						</div>
					</div>
				</div>
			</div>

			<div className='mt-12'>
				<h5 className='text-lg font-semibold text-gray-900 mb-4'>Why Choose Us?</h5>
				<ul className='space-y-3 text-gray-600'>
					<li className='flex items-center'>
						<CheckCircle className='h-5 w-5 text-green-600 mr-3' />
						Direct from farm to your doorstep
					</li>
					<li className='flex items-center'>
						<CheckCircle className='h-5 w-5 text-green-600 mr-3' />
						Competitive pricing with bulk discounts
					</li>
					<li className='flex items-center'>
						<CheckCircle className='h-5 w-5 text-green-600 mr-3' />
						Fast and reliable worldwide shipping
					</li>
					<li className='flex items-center'>
						<CheckCircle className='h-5 w-5 text-green-600 mr-3' />
						24/7 customer support
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactInfo;
