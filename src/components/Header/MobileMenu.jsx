import React from 'react';
import NavLinks from './NavLinks';

const MobileMenu = ({ isOpen }) => {
	if (!isOpen) return null;

	return (
		<div className='md:hidden py-4 border-t border-gray-200'>
			<NavLinks isMobile />
		</div>
	);
};

export default MobileMenu;
