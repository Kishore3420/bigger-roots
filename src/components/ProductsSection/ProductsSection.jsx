import React from 'react';
import { products } from '../../constants/products';
import ProductCard from './ProductCard';

const ProductsSection = () => {
	return (
		<section id='products' className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h3 className='text-3xl font-bold text-gray-900 mb-4'>Our Premium Products</h3>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						We offer the finest quality Indian agricultural products, carefully selected and processed to
						meet international standards.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsSection;
