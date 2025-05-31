import React from 'react';

const HeroSection = () => {
	const stats = [
		{ number: '5+', label: 'Premium Products' },
		{ number: '25+', label: 'Countries Served' },
		{ number: '100%', label: 'Quality Assured' },
		{ number: '500+', label: 'Happy Clients' },
	];

	return (
		<section id='home' className='relative py-20 lg:py-32'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h2 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
						Premium Indian Agricultural Products
						<span className='block text-green-600'>Exported Worldwide</span>
					</h2>
					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
						High-quality Makhana, Turmeric, Nutmeg, Palm Jaggery, and Black Pepper directly from Indian
						farms. We prioritize sustainability and superior quality in every product we export worldwide.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='#products'
							className='bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors'
						>
							View Products
						</a>
						<a
							href='#contact'
							className='bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors'
						>
							Get Quote
						</a>
					</div>
				</div>
			</div>

			{/* Stats */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20'>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<div key={index} className='text-center'>
							<div className='text-3xl font-bold text-green-600 mb-2'>{stat.number}</div>
							<div className='text-gray-600'>{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
