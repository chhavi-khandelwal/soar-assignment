import { useState, useEffect } from 'react';

const useDeviceType = (mobileBreakpoint = 768, tabletBreakpoint = 1024) => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < mobileBreakpoint
	);
	const [isTablet, setIsTablet] = useState(
		window.innerWidth >= mobileBreakpoint &&
			window.innerWidth < tabletBreakpoint
	);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < mobileBreakpoint);
			setIsTablet(
				window.innerWidth >= mobileBreakpoint &&
					window.innerWidth < tabletBreakpoint
			);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [mobileBreakpoint, tabletBreakpoint]);

	return { isMobile, isTablet };
};

export default useDeviceType;
