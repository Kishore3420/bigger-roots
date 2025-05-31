import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className='bg-white shadow-md sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					<div className='flex items-center space-x-2'>
						<Leaf className='h-8 w-8 text-green-600' />
						<h1 className='text-2xl font-bold text-gray-900'>Bigger Roots Exim</h1>
					</div>

					<NavLinks />

					<button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle menu'>
						{isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
					</button>
				</div>

				<MobileMenu isOpen={isMenuOpen} />
			</div>
		</header>
	);
};

export default Header;
