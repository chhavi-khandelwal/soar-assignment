import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
	ArcOptions,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useDashboard } from '../context/DashboardContext';
import { useMemo } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
	ChartDataLabels
);
const options = {
	responsive: true,
	maintainAspectRatio: false,
	aspectRatio: 1,
	scales: {
		r: {
			grid: { display: false },
			ticks: {
				display: false,
			},
		},
	},
	plugins: {
		legend: false,
		datalabels: {
			color: 'white',
			formatter: (
				value: string,
				ctx: {
					chart: { data: { labels: { [x: string]: any } } };
					dataIndex: string | number;
				}
			) => {
				return `      ${value}% \n ${ctx.chart.data.labels[ctx.dataIndex]}`;
			},
			anchor: 'center',
			align: 'center',
			clip: false,
			font: {
				weight: 'bold',
				size: 12,
			},
		},
	},
} as unknown as ArcOptions;

const ExpenseStats = () => {
	const { stats } = useDashboard();

	if (!stats?.expenses?.length) {
		return null;
	}

	const labels = useMemo(() => stats.expenses.map(({ type }) => type), [stats]);
	const data = useMemo(
		() => stats.expenses.map(({ percent }) => percent),
		[stats]
	);

	const expenseData = {
		labels,
		datasets: [
			{
				label: 'Expense %',
				data,
				backgroundColor: ['#1E2D5E', '#2D60FF', '#FFA543', '#000000'],
				borderColor: '#fff',
				borderWidth: 2,
			},
		],
	};

	return (
		<PolarArea
			data={expenseData}
			options={options}
		/>
	);
};

export default ExpenseStats;
