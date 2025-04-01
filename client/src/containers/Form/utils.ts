const maxYear = 13;
const minYear = 120;
export const getMinDate = (): string => {
	const today = new Date();
	today.setFullYear(today.getFullYear() - minYear);
	return today.toISOString().split('T')[0];
};

export const getMaxDate = (): string => {
	const today = new Date();
	today.setFullYear(today.getFullYear() - maxYear);
	return today.toISOString().split('T')[0];
};

export const formatDate = (timestamp: number): string => {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(date);
};

export const validateEmail = (email: string) => {
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!email) return 'Email is required';
	if (!emailPattern.test(email)) return 'Please enter a valid email address';
	return '';
};

export const validatePassword = (password: string) => {
	if (!password) return 'Password is required';
	if (password.length < 8) return 'Password must be at least 8 characters long';
	return '';
};
