import { CreditCardsIcon } from '../../assets/svgIcons/CreditCardsIcon';
import { ServicesIcon } from '../../assets/svgIcons/ServicesIcon';
import { LoansIcon } from '../../assets/svgIcons/LoansIcon';
import { AccountsIcon } from '../../assets/svgIcons/AccountsIcon';
import { TransactionsIcon } from '../../assets/svgIcons/TransactionsIcon';
import { DashboardIcon } from '../../assets/svgIcons/DashboardIcon';
import { InvestmentsIcon } from '../../assets/svgIcons/InvestmentsIcon';
import { MyPrivilegesIcon } from '../../assets/svgIcons/MyPrivilegesIcon';
import { SettingIcon } from '../../assets/svgIcons/SettingIcon';
import { JSX } from 'react';

export interface SideBarOption {
	icon: JSX.Element;
	label: string;
	route?: string;
}

export const SideBarOptions = [
	{
		label: 'Dashboard',
		icon: DashboardIcon,
		route: '/overview',
		title: 'Overview',
	},
	{
		label: 'Transactions',
		icon: TransactionsIcon,
	},
	{
		label: 'Accounts',
		icon: AccountsIcon,
	},
	{
		label: 'Investments',
		icon: InvestmentsIcon,
	},
	{
		label: 'Credit Cards',
		icon: CreditCardsIcon,
	},
	{
		label: 'Loans',
		icon: LoansIcon,
	},
	{
		label: 'Services',
		icon: ServicesIcon,
	},
	{
		label: 'My Privileges',
		icon: MyPrivilegesIcon,
	},
	{
		label: 'Setting',
		icon: SettingIcon,
		route: '/setting',
		title: 'Setting',
	},
];
