import { useMemo } from 'react';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	LineOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDashboard } from '../context/DashboardContext';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: { enabled: false },
		datalabels: {
			display: false,
		},
	},
	scales: {
		x: {
			type: 'category',
			ticks: { color: '#718EBF' },
			border: { dash: [5, 5] },
		},
		y: {
			beginAtZero: true,
			ticks: { count: 5, color: '#718EBF' },
			border: { dash: [5, 5] },
		},
	},
} as unknown as LineOptions;

const BalanceHistory = () => {
	const { stats } = useDashboard();

	if (!stats?.balanceHistory?.length) {
		return;
	}
	const labels = useMemo(
		() => stats?.balanceHistory.map(({ month }) => month),
		[stats]
	);
	const data = useMemo(
		() => stats?.balanceHistory.map(({ balance }) => balance),
		[stats]
	);

	const chartData = useMemo(() => {
		return {
			labels,
			datasets: [
				{
					data,
					borderColor: '#1814F3',
					backgroundColor: (context: any) => {
						const chart = context.chart;
						const { ctx, chartArea } = chart;

						if (!chartArea) return '#2D60FF';

						const gradient = ctx.createLinearGradient(
							0,
							chartArea.top,
							0,
							chartArea.bottom
						);
						gradient.addColorStop(0, 'rgba(45, 96, 255, 0.25)');
						gradient.addColorStop(1, 'rgba(45, 96, 255, 0)');
						return gradient;
					},
					tension: 0.4,
					radius: 0,
					pointHoverRadius: 0,
					borderWidth: 2,
					fill: true,
				},
			],
		};
	}, [labels, data]);

	return (
		<Line
			options={options}
			data={chartData}
		/>
	);
};
export default BalanceHistory;
