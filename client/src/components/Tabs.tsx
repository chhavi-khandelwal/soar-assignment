import { useState } from 'react';
import useDeviceType from '../hooks/useDeviceType';

type TabsProps = {
	tabs: { id: string; label: string; content: React.ReactNode }[];
};

const TAB_WIDTH = 150;
const TAB_WIDTH_MOBILE = 90;
const TAB_WIDTH_CLASS = 'w-[150px]';
const TAB_WIDTH_CLASS_MOBILE = 'w-[90px]';
const getTabWidth = (isMobile: boolean) => {
	return isMobile
		? { width: TAB_WIDTH_MOBILE, clas: TAB_WIDTH_CLASS_MOBILE }
		: { width: TAB_WIDTH, clas: TAB_WIDTH_CLASS };
};

export default function Tabs({ tabs }: TabsProps) {
	const { isMobile } = useDeviceType();
	const [activeTab, setActiveTab] = useState('edit');
	const { width, clas } = getTabWidth(isMobile);

	return (
		<div className='w-full text-xs md:text-base'>
			<div
				role='tablist'
				className='relative inline-flex border-b border-base-border w-full'
			>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						role='tab'
						aria-selected={activeTab === tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`relative md:px-4 px-2 pb-2 hover:text-custom-base transition-colors ${clas} text-center ${activeTab === tab.id ? 'text-custom-base' : 'text-form'}`}
					>
						{tab.label}
					</button>
				))}
				<div
					className={`absolute bottom-0 h-[3px] bg-custom-base transition-all duration-500 ${clas}`}
					style={{
						left: `${tabs.findIndex((t) => t.id === activeTab) * width}px`,
					}}
				/>
			</div>

			<div className='md:mt-10 mt:4  relative overflow-hidden'>
				<div
					className='flex transition-transform duration-500'
					style={{
						transform: `translateX(-${tabs.findIndex((t) => t.id === activeTab) * 100}%)`,
					}}
				>
					{tabs.map((tab) => (
						<div
							key={tab.id}
							className='w-full flex-shrink-0'
						>
							{tab.content}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
