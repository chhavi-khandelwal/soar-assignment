import React, { createContext, useContext, useEffect, useState } from 'react';
import {
	Card,
	fetchCards,
	fetchRecentTransactions,
	fetchStats,
	fetchTransferList,
	Stats,
	Transaction,
	TransferPerson,
} from '../api/api';
import { useLocation } from 'react-router-dom';

interface DashboardContextType {
	cards: Card[];
	transactions: Transaction[];
	transferList: TransferPerson[];
	stats: Stats | null;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
	undefined
);

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cards, setCards] = useState<Card[]>([]);
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [transferList, setTransferList] = useState<TransferPerson[]>([]);
	const [stats, setStats] = useState<Stats | null>(null);

	const location = useLocation();

	useEffect(() => {
		if (
			(cards.length &&
				transactions.length &&
				transferList.length &&
				stats &&
				location.pathname === '/overview') ||
			location.pathname !== '/overview'
		)
			return;
		fetchCards().then(setCards);
		fetchRecentTransactions().then(setTransactions);
		fetchTransferList().then(setTransferList);
		fetchStats().then(setStats);
	}, [location]);

	return (
		<DashboardContext.Provider
			value={{ cards, transactions, transferList, stats: stats }}
		>
			{children}
		</DashboardContext.Provider>
	);
};
