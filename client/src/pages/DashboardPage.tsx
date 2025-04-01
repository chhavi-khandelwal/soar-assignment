import { RecentTransactions } from '../components/RecentTransactions';
import { TransferListCard } from '../components/TransferListCard';
import { board } from '../tailwind';
import { CardsSection } from '../components/CardSection';
import useMatchMedia from '../hooks/useMatchMedia';
import useDeviceType from '../hooks/useDeviceType';
import { lazy, Suspense } from 'react';
import { Loader } from '../components/Loader';
const ExpenseStats = lazy(() => import('../components/ExpenseStats'));
const BalanceHistory = lazy(() => import('../components/BalanceHistory'));
const WeeklyActivity = lazy(() => import('../components/WeeklyActivity'));

const DashboardPage = () => {
	const isExactWidth = useMatchMedia(1024);
	const { isMobile } = useDeviceType();
	const ipadProAdjustment =
		isExactWidth && !isMobile ? '!w-full !flex-col' : '';

	return (
		<div className='flex flex-col gap-4 md:p-0 p-6 bg-white md:bg-transparent md:rounded-3xl'>
			<div className='flex flex-col lg:flex-row gap-4 '>
				<div className='flex flex-col gap-4 lg:w-2/3'>
					<CardsSection />
				</div>
				<div className='flex flex-col gap-4 lg:w-1/3'>
					<Heading>Recent Transaction</Heading>
					<div className={`${board} md:px-4 md:max-h-[235px] md:py-2`}>
						<Suspense fallback={<Loader />}>
							<RecentTransactions />
						</Suspense>
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-4'>
				<div className='flex flex-col gap-4	lg:w-2/3'>
					<Heading>Weekly Activity</Heading>
					<div className={`${board} h-[275px]`}>
						<Suspense fallback={<Loader />}>
							<WeeklyActivity />
						</Suspense>
					</div>
				</div>
				<div className='flex flex-col gap-4 lg:w-1/3'>
					<Heading>Expense Statistics</Heading>
					<div className={`${board} h-[275px]`}>
						<Suspense fallback={<Loader />}>
							<ExpenseStats />
						</Suspense>
					</div>
				</div>
			</div>

			<div
				className={`flex flex-col lg:flex-row gap-4 pb-4 md:pb-6  ${ipadProAdjustment}`}
			>
				<div className={`flex flex-col gap-4 lg:w-2/5 ${ipadProAdjustment}`}>
					<Heading>Quick Transfer</Heading>
					<div className={`${board} md:p-6 flex flex-col`}>
						<Suspense fallback={<Loader />}>
							<TransferListCard />
						</Suspense>
					</div>
				</div>
				<div className='flex flex-col gap-4 lg:w-3/5'>
					<Heading>Balance History</Heading>
					<div className={`${board}`}>
						<Suspense fallback={<Loader />}>
							<BalanceHistory />
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DashboardPage;

export const Heading = ({ children }: { children: React.ReactNode }) => {
	return <h1 className='font-semibold text-base md:text-xl'>{children}</h1>;
};
