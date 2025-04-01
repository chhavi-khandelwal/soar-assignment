import { Bar } from 'react-chartjs-2';
import { useDashboard } from '../context/DashboardContext';
import { useMemo } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	BarOptions,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top' as 'top',
			align: 'end',
			labels: {
				color: '#718EBF',
				boxWidth: 8,
				boxHeight: 8,
				usePointStyle: true,
				pointStyle: 'circle',
			},
		},
		datalabels: {
			display: false,
		},
	},
	scales: {
		x: {
			ticks: { color: '#718EBF' },
			grid: {
				display: false,
			},
		},
		y: {
			beginAtZero: true,
			ticks: { count: 5, color: '#718EBF' },
			grid: {
				color: '#E0E0E0',
				borderDash: [5, 5],
			},
		},
	},
} as unknown as BarOptions;

const WeeklyActivity = () => {
	const { stats } = useDashboard();

	if (
		!stats?.weeklyStats?.deposit?.length ||
		!stats?.weeklyStats?.withdraw?.length
	) {
		return null;
	}

	const labels = useMemo(
		() => stats.weeklyStats.deposit.map(({ day }) => day),
		[stats]
	);
	const depositData = useMemo(
		() => stats.weeklyStats.deposit.map(({ amount }) => amount),
		[stats]
	);
	const withdrawData = useMemo(
		() => stats.weeklyStats.withdraw.map(({ amount }) => amount),
		[stats]
	);

	const data = {
		labels,
		datasets: [
			{
				label: 'Deposit',
				data: depositData,
				backgroundColor: '#2D60FF',
				barPercentage: 0.4,
				categoryPercentage: 0.6,
				borderRadius: {
					topLeft: 10,
					topRight: 10,
					bottomLeft: 10,
					bottomRight: 10,
				},
			},
			{
				label: 'Withdraw',
				data: withdrawData,
				backgroundColor: '#000000',
				barPercentage: 0.4,
				categoryPercentage: 0.6,
				borderRadius: {
					topLeft: 10,
					topRight: 10,
					bottomLeft: 10,
					bottomRight: 10,
				},
			},
		],
	};

	return (
		<Bar
			options={options}
			data={data}
		/>
	);
};
export default WeeklyActivity;
