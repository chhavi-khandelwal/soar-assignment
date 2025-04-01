import { Suspense, useState } from 'react';
import { Header } from './Header';
import { SideBar } from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import IconButton from '../components/IconButton';
import HamburgerIcon from '../assets/icons/hamburger.svg';
import useDeviceType from '../hooks/useDeviceType';
import { Loader } from '../components/Loader';

const MobileMenuIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<IconButton
		icon={HamburgerIcon}
		className='bg-transparent justify-start'
		ariaLabel='Sidebar Menu'
		onClick={onClick}
		width={14}
		height={18}
	/>
);

const Layout: React.FC = () => {
	const { isMobile, isTablet } = useDeviceType();
	const [showMenu, setShowMenu] = useState(isMobile || isTablet ? false : true);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className='flex h-screen'>
			<SideBar showMenu={showMenu} />
			<div
				className={`flex flex-col w-full h-full ${!isTablet && !isMobile ? 'pl-[250px]' : ''}`}
			>
				<Header
					mobileIcon={
						isMobile || isTablet ? (
							<MobileMenuIcon onClick={toggleMenu} />
						) : (
							<></>
						)
					}
					showMenu={showMenu}
				/>
				<main className='md:p-10 bg-custom-gray w-full h-full flex-grow overflow-y-auto overflow-x-hidden'>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</main>
			</div>
		</div>
	);
};

export default Layout;
