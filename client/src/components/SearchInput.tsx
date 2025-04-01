import TextInput from './TextInput';

import SearchIcon from '../assets/icons/search.svg';
const Icon = (
	<img
		src={SearchIcon}
		alt='search icon'
		width={19}
		height={19}
	/>
);

export const SearchInput = ({ className }: { className?: string }) => {
	return (
		<div className={`${className}`}>
			<TextInput
				placeholder='Search for something'
				icon={Icon}
				className={`min-w-[255px] rounded-[40px] !bg-custom-gray border border-custom-gray text-custom-base `}
				ariaLabel='Search'
			></TextInput>
		</div>
	);
};
