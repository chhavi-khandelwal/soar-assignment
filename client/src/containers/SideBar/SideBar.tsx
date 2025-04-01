import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideBarOptions } from './SideBarOptions';
import Logo from '../../assets/icons/soar.svg';
import useDeviceType from '../../hooks/useDeviceType';

export const SideBar = ({ showMenu }: { showMenu: boolean }) => {
	const { isMobile, isTablet } = useDeviceType();
	const location = useLocation();
	const [selected, setSelected] = useState<string>('');

	const handleLinkClick = (route: string) => {
		setSelected(route);
	};

	return (
		<div
			className={`fixed left-0 h-full min-w-[250px] bg-white border border-primary-border shadow-lg p-4 z-50 transform transition-transform duration-300 ${
				showMenu && (isMobile || isTablet)
					? 'translate-x-0'
					: !(isMobile || isTablet)
						? 'translate-x-0'
						: '-translate-x-full '
			} ${isTablet ? 'top-[90px]' : isMobile ? 'top-[60px]' : 'top-0'}`}
		>
			<div className='xl:flex items-center  px-[20px] py-[10px] gap-[30px] mb-[10px] hidden'>
				<img
					src={Logo}
					alt='Soar Logo'
					width={19}
					height={19}
				/>
				<h1 className='text-[25px] font-extrabold'>Soar Task</h1>
			</div>
			<nav>
				{SideBarOptions.map((option) => {
					const Icon = option.icon;
					const isActive =
						location.pathname === option.route || selected === option.route;

					return (
						<Link
							key={option.label}
							to={option.route || '#'}
							onClick={() => option.route && handleLinkClick(option.route)}
							aria-label={option.label}
							className={`flex items-center gap-[30px] p-[20px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${option.route ? 'hover:text-custom-base' : 'hover:cursor-not-allowed'} ${
								isActive ? 'text-custom-base' : 'text-inactive'
							}`}
						>
							<Icon selected={isActive} />
							<span className='text-[18px] font-medium '>{option.label}</span>
						</Link>
					);
				})}
			</nav>
		</div>
	);
};
