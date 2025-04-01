export type User = {
	id: string;
	name: string;
	userName: string;
	email: string;
	password: string;
	presentAddress: string;
	permanentAddress: string;
	postalCode: string;
	city: string;
	country: string;
	image: string;
	dob: string;
};

export type Card = {
	id: string;
	cardNumber: string;
	cardHolder: string;
	validThr: string;
	merchant: string;
	balance: number;
	currency: string;
	type: 'gray' | 'white';
};

export type Transaction = {
	id: string;
	name: string;
	type: string;
	logo: string;
	amount: string;
	timestamp: number;
};

export type Stats = {
	balanceHistory: BalanceHistory[];
	expenses: Expenses[];
	weeklyStats: WeeklyActivity;
};

export type BalanceHistory = {
	month: string;
	balance: number;
};

export type Expenses = {
	type: ExpenseType;
	percent: number;
};

export type WeeklyActivity = {
	deposit: { day: string; amount: number }[];
	withdraw: { day: string; amount: number }[];
};

export type TransferPerson = {
	id: number;
	name: string;
	title: string;
	photo: string;
};

enum ExpenseType {
	ENTERTAINMENT = 'Entertainment',
	BILL_EXPENSE = 'Bill Expense',
	OTHERS = 'Others',
	INVESTMENT = 'Investment',
}

export const fetchUser = async (): Promise<User> => {
	let user = null;
	try {
		const userResponse = await fetch(`${import.meta.env.VITE_API}/api/user`);

		user = await userResponse.json();
	} catch (e) {
		alert(e);
	}
	return user;
};

export const fetchCards = async (): Promise<Card[]> => {
	let cards = [];
	try {
		const cardsResponse = await fetch(`${import.meta.env.VITE_API}/api/cards`);

		cards = await cardsResponse.json();
	} catch (e) {
		alert(e);
	}
	return cards;
};

export const fetchRecentTransactions = async (): Promise<Transaction[]> => {
	let transactions = [];
	try {
		const transactionsResponse = await fetch(
			`${import.meta.env.VITE_API}/api/recent-transactions`
		);

		transactions = await transactionsResponse.json();
	} catch (e) {
		alert(e);
	}
	return transactions;
};

export const fetchTransferList = async (): Promise<TransferPerson[]> => {
	let transferList = [];
	try {
		const transferListResponse = await fetch(
			`${import.meta.env.VITE_API}/api/transfer-list`
		);

		transferList = await transferListResponse.json();
	} catch (e) {
		alert(e);
	}
	return transferList;
};

export const fetchStats = async (): Promise<Stats> => {
	let stats;
	try {
		const statsResponse = await fetch(`${import.meta.env.VITE_API}/api/stats`);

		stats = await statsResponse.json();
	} catch (e) {
		alert(e);
	}
	return stats;
};
