import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div>
						<div className='flex items-center space-x-2 mb-4'>
							<Leaf className='h-6 w-6 text-green-400' />
							<h5 className='text-xl font-bold'>Bigger Roots Exim</h5>
						</div>
						<p className='text-gray-400 mb-4'>
							Your trusted partner for premium Indian agricultural products worldwide.
						</p>
					</div>

					<div>
						<h6 className='font-semibold mb-4'>Quick Links</h6>
						<ul className='space-y-2 text-gray-400'>
							<li>
								<a href='#home' className='hover:text-white transition-colors'>
									Home
								</a>
							</li>
							<li>
								<a href='#about' className='hover:text-white transition-colors'>
									About Us
								</a>
							</li>
							<li>
								<a href='#products' className='hover:text-white transition-colors'>
									Products
								</a>
							</li>
							<li>
								<a href='#contact' className='hover:text-white transition-colors'>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 className='font-semibold mb-4'>Products</h6>
						<ul className='space-y-2 text-gray-400'>
							<li>Premium Makhana</li>
							<li>Pure Turmeric</li>
							<li>Nutmeg & Mace</li>
							<li>Palm Jaggery</li>
							<li>Black Pepper</li>
						</ul>
					</div>

					<div>
						<h6 className='font-semibold mb-4'>Contact Info</h6>
						<div className='space-y-2 text-gray-400'>
							<div>+91 98765 43210</div>
							<div>info@biggerrootsexim.com</div>
							<div>New Delhi, India</div>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
					<p>&copy; 2025 Bigger Roots Exim LLP. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
