type TextInputProps = {
	placeholder?: string;
	id?: string;
	icon?: React.ReactNode;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	ariaLabel?: string;
	className?: string;
	autoComplete?: 'on' | 'off';
	minLength?: number;
	pattern?: string;
	disabled?: boolean;
};
export const inputClass =
	'w-full bg-white border border-custom-border md:h-[50px] h-[40px] pr-4 md:rounded-2xl rounded-lg outline-hidden focus:ring-1 focus:ring-gray-300 text-form font-base leading-[100%] pl-5 md:text-base text-xs';

const TextInput: React.FC<TextInputProps> = ({
	placeholder = '',
	id,
	icon,
	value,
	onChange,
	required = false,
	ariaLabel,
	className = '',
	autoComplete = 'off',
	minLength,
	pattern,
	disabled,
}) => {
	return (
		<div className='relative w-full'>
			{icon && (
				<span className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500'>
					{icon}
				</span>
			)}
			<input
				type='text'
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				aria-label={ariaLabel}
				autoComplete={autoComplete}
				minLength={minLength}
				pattern={pattern}
				disabled={disabled}
				aria-disabled={disabled ? 'true' : undefined}
				className={`${inputClass} ${icon ? '!pl-15' : 'pl-5'} ${className}`}
			/>
		</div>
	);
};

export default TextInput;
