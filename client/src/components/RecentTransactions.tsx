import { formatDate } from '../containers/Form/utils';
import { useDashboard } from '../context/DashboardContext';

export const RecentTransactions = () => {
	const { transactions } = useDashboard();
	return (
		<div className='flex flex-col md:p-2 overflow-y-auto gap-2 scroll-smooth'>
			{transactions.map((transaction) => {
				const { timestamp, name, type, logo, amount } = transaction;
				const credited = type === 'credit';
				return (
					<div
						key={transaction.id}
						className='flex items-center justify-between py-1'
					>
						<div className='flex gap-4'>
							<img
								src={logo}
								width={50}
								height={50}
								className='md:w-[55px] md:h-[55px]'
								alt={name}
							/>
							<div className='flex flex-col'>
								<div className='md:text-base text-sm text-custom-base font-medium '>
									{name}
								</div>
								<div className='md:text-sm text-xs text-form font-normal'>
									{formatDate(timestamp)}
								</div>
							</div>
						</div>

						<div
							className={`${credited ? 'text-custom-green' : 'text-custom-fuchsia'} md:text-base text-[11px] font-medium`}
						>
							{credited ? '+' : '-'} {amount}
						</div>
					</div>
				);
			})}
		</div>
	);
};
