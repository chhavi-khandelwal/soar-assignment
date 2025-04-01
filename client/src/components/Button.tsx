type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	variant?: 'default' | 'text';
	ariaLabel?: string;
	disabled?: boolean;
	type: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	children,
	onClick,
	className = '',
	variant = 'default',
	ariaLabel,
	disabled = false,
}) => {
	const baseStyles = `transition-all cursor-pointer font-medium rounded-lg  shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] text-[18px] font-medium ${className} md:max-w-[190px] w-full flex items-center justify-center gap-2`;
	const variantStyles =
		variant === 'default'
			? 'md:h-[50px] bg-custom-base px-6 text-white hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-800 '
			: 'bg-transparent text-custom-base hover:text-gray-600 focus:bg-gray-600 active:text-gray-800';

	return (
		<button
			onClick={onClick}
			className={`${variantStyles} ${baseStyles}`}
			aria-label={ariaLabel}
			disabled={disabled}
			role='button'
			type={type}
			aria-disabled={disabled ? 'true' : undefined}
			tabIndex={disabled ? -1 : 0}
			aria-pressed={disabled ? 'false' : undefined}
			aria-expanded={disabled ? 'false' : undefined}
		>
			{children}
		</button>
	);
};

export default Button;
