import { useState } from 'react';
import { Heading } from '../pages/DashboardPage';
import { CreditCard } from './CreditCard';
import { useDashboard } from '../context/DashboardContext';

export const CardsSection = () => {
	const [showAll, setShowAll] = useState(false);
	const { cards } = useDashboard();

	const handleSeeAll = () => {
		setShowAll(!showAll);
	};

	return (
		<>
			<div className='flex justify-between items-center'>
				<Heading>My Cards</Heading>
				<button
					className='font-semibold text-base text-cursor hover:text-primary transition-colors duration-200'
					onClick={handleSeeAll}
					aria-label='See all cards'
				>
					{showAll ? 'Collapse' : 'See All'}
				</button>
			</div>

			<div
				className={`flex gap-4 pb-2  transition-all duration-300 ${
					showAll ? '!overflow-x-auto' : 'overflow-x-hidden'
				}`}
			>
				{cards.map((card) => (
					<CreditCard
						key={card.id}
						card={card}
					/>
				))}
			</div>
		</>
	);
};
