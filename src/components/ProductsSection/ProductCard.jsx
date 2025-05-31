import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
	return (
		<div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6'>
			<div className='text-4xl mb-4'>{product.image}</div>
			<h4 className='text-xl font-bold text-gray-900 mb-3'>{product.name}</h4>
			<p className='text-gray-600 mb-4'>{product.description}</p>

			<div className='mb-4'>
				<h5 className='font-semibold text-gray-900 mb-2'>Available Grades:</h5>
				<div className='flex flex-wrap gap-2'>
					{product.grades.map((grade, idx) => (
						<span key={idx} className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'>
							{grade}
						</span>
					))}
				</div>
			</div>

			<div className='mb-6'>
				<h5 className='font-semibold text-gray-900 mb-2'>Key Benefits:</h5>
				<ul className='text-sm text-gray-600 space-y-1'>
					{product.benefits.map((benefit, idx) => (
						<li key={idx} className='flex items-center'>
							<CheckCircle className='h-4 w-4 text-green-600 mr-2' />
							{benefit}
						</li>
					))}
				</ul>
			</div>

			<a
				href='#contact'
				className='block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors'
			>
				Get Quote
			</a>
		</div>
	);
};

export default ProductCard;
