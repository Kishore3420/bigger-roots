import React from 'react';

const NavLinks = ({ isMobile = false }) => {
	const navItems = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#products', label: 'Products' },
		{ href: '#contact', label: 'Contact' },
	];

	return (
		<nav className={isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-8'}>
			{navItems.map((item) => (
				<a key={item.href} href={item.href} className='text-gray-700 hover:text-green-600 transition-colors'>
					{item.label}
				</a>
			))}
		</nav>
	);
};

export default NavLinks;
