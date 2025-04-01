type IconButtonProps = {
	icon: string | undefined;
	onClick?: () => void;
	className?: string;
	active?: boolean;
	ariaLabel: string;
	width?: number;
	height?: number;
	onKeyDown?: (e: React.KeyboardEvent) => void;
};

const IconButton = ({
	icon,
	onClick,
	className = '',
	active = false,
	ariaLabel,
	width = 25,
	height = 25,
	onKeyDown,
}: IconButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`flex min-w-[50px] cursor-pointer items-center md:justify-center rounded-full bg-custom-gray hover:bg-gray-200 md:w-[50px] md:h-[50px] transition-all	 ${className}`}
			aria-label={ariaLabel}
			role='button'
			tabIndex={0}
			onKeyDown={onKeyDown}
		>
			<img
				src={icon}
				alt={ariaLabel}
				width={width}
				height={height}
				className='object-contain'
			/>
		</button>
	);
};

export default IconButton;
