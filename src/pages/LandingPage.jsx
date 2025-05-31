import { useEffect } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
	// Handle document head updates for SEO
	useEffect(() => {
		// Set page title
		document.title = 'Bigger Roots Exim | Premium Indian Agricultural Products';

		// Set meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				'content',
				'Exporters of premium Indian agricultural products including Makhana, Turmeric, Nutmeg, Palm Jaggery, and Black Pepper. Direct from Indian farms to global markets.'
			);
		} else {
			const newMetaDescription = document.createElement('meta');
			newMetaDescription.name = 'description';
			newMetaDescription.content =
				'Exporters of premium Indian agricultural products including Makhana, Turmeric, Nutmeg, Palm Jaggery, and Black Pepper. Direct from Indian farms to global markets.';
			document.head.appendChild(newMetaDescription);
		}

		// Set viewport meta tag
		const metaViewport = document.querySelector('meta[name="viewport"]');
		if (!metaViewport) {
			const newMetaViewport = document.createElement('meta');
			newMetaViewport.name = 'viewport';
			newMetaViewport.content = 'width=device-width, initial-scale=1';
			document.head.appendChild(newMetaViewport);
		}

		// Add structured data for SEO
		const structuredData = {
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Bigger Roots Exim LLP',
			url: 'https://www.biggerrootsexim.com',
			logo: 'https://www.biggerrootsexim.com/logo.png',
			description: 'Exporters of premium Indian agricultural products',
			address: {
				'@type': 'PostalAddress',
				streetAddress: '123 Export Plaza, Business District',
				addressLocality: 'New Delhi',
				postalCode: '110001',
				addressCountry: 'IN',
			},
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: '+91 98765 43210',
				contactType: 'customer service',
			},
		};

		// Check if structured data script already exists
		const existingScript = document.querySelector('script[type="application/ld+json"]');
		if (!existingScript) {
			const script = document.createElement('script');
			script.type = 'application/ld+json';
			script.textContent = JSON.stringify(structuredData);
			document.head.appendChild(script);
		}

		// Cleanup function (optional - removes meta tags when component unmounts)
		return () => {
			// You can add cleanup logic here if needed
			// For example, removing the structured data script
		};
	}, []);

	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50'>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ProductsSection />
				<TestimonialsSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
};

export default LandingPage;
