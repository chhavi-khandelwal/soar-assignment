import { useState, useEffect } from 'react';

const useMatchMedia = (width: number) => {
	const [isExactWidth, setIsExactWidth] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(width: ${width}px)`);

		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsExactWidth(e.matches);
		};

		setIsExactWidth(mediaQuery.matches);

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, [width]);

	return isExactWidth;
};

export default useMatchMedia;
