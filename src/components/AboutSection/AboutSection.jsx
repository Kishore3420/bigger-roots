import React from 'react';
import { Shield, Globe, Truck } from 'lucide-react';

const AboutSection = () => {
	const features = [
		{
			icon: Shield,
			title: 'Quality Assured',
			description: '100% Premium Products',
		},
		{
			icon: Globe,
			title: 'Global Reach',
			description: '25+ Countries',
		},
		{
			icon: Truck,
			title: 'Fast Deliver',
			description: 'On-time Shipping',
		},
	];

	const highlights = [
		{
			emoji: '🌾',
			title: 'Farm Fresh',
			description: 'Direct from Indian farms',
			bgColor: 'bg-green-100',
		},
		{
			emoji: '🔍',
			title: 'Quality Control',
			description: 'Rigorous testing standards',
			bgColor: 'bg-orange-100',
		},
		{
			emoji: '🌍',
			title: 'Global Export',
			description: 'Worldwide shipping',
			bgColor: 'bg-blue-100',
		},
		{
			emoji: '🤝',
			title: 'Reliable Partner',
			description: 'Trusted by 500+ clients',
			bgColor: 'bg-purple-100',
		},
	];

	return (
		<section id='about' className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div>
						<h3 className='text-3xl font-bold text-gray-900 mb-6'>About Bigger Roots Exim LLP</h3>
						<p className='text-lg text-gray-600 mb-6'>
							Bigger Roots Exim LLP is a trusted name in the global export market. We specialize in the
							export of premium Indian agricultural products like Makhana, Turmeric, Nutmeg, Palm Jaggery,
							and Black Pepper.
						</p>
						<p className='text-lg text-gray-600 mb-8'>
							Our mission is to deliver the highest quality products with exceptional customer service,
							ensuring smooth transactions across borders. We work directly with farmers to ensure the
							best quality and sustainable farming practices.
						</p>

						<div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
							{features.map((feature, index) => (
								<div key={index} className='flex items-center space-x-3'>
									<feature.icon className='h-8 w-8 text-green-600' />
									<div>
										<div className='font-semibold'>{feature.title}</div>
										<div className='text-sm text-gray-600'>{feature.description}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						{highlights.map((highlight, index) => (
							<div key={index} className={`${highlight.bgColor} p-6 rounded-lg`}>
								<div className='text-2xl mb-2'>{highlight.emoji}</div>
								<h4 className='font-semibold mb-2'>{highlight.title}</h4>
								<p className='text-sm text-gray-600'>{highlight.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
