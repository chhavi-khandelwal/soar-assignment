import { useLocation } from 'react-router-dom';
import { SearchInput } from '../components/SearchInput';
import { SideBarOptions } from './SideBar/SideBarOptions';
import IconButton from '../components/IconButton';
import SettingIcon from '../assets/icons/settings-inverted.svg';
import BellIcon from '../assets/icons/bell.svg';
import { useUser } from '../context/UserSettingsContext';
import React from 'react';
import useDeviceType from '../hooks/useDeviceType';

export const Header = ({
	mobileIcon,
}: {
	mobileIcon: React.ReactElement;
	showMenu: boolean;
}) => {
	const location = useLocation();
	const { isMobile, isTablet } = useDeviceType();
	const { user } = useUser();
	const currentOption = SideBarOptions.find(
		(option) =>
			`/` + option.title?.toLowerCase().replace(/\s+/g, '-') ===
			location.pathname
	);

	return (
		<>
			<header className='flex justify-between items-center xl:py-4 xl:px-8 py-4 px-6 md:border-b border-primary-border w-full'>
				{mobileIcon}
				<h1 className='md:text-2xl text-xl font-semibold'>
					{currentOption?.title}
				</h1>
				<div className='flex items-center gap-[40px]'>
					{!(isMobile || isTablet) ? <SearchInput /> : <></>}
					<IconButton
						icon={SettingIcon}
						ariaLabel='User Settings'
						className='hidden md:flex'
					/>
					<IconButton
						icon={BellIcon}
						ariaLabel='Notifications'
						className='hidden md:flex'
					/>
					<IconButton
						className='min-w-[60px] md:h-[60px] bg-transparent justify-end'
						icon={user.image || undefined}
						ariaLabel='User Profile'
						width={isMobile || isTablet ? 35 : 60}
						height={isMobile || isTablet ? 35 : 60}
					/>
				</div>
			</header>
			{isMobile || isTablet ? <SearchInput className='py-4 px-6' /> : <></>}
		</>
	);
};
