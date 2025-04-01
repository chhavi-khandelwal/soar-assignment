import { useState } from 'react';
import { TransferPerson } from '../api/api';
import Button from './Button';
import SendIcon from '../assets/icons/send.svg';
import ArrowIcon from '../assets/icons/right-arrow.svg';
import { useDashboard } from '../context/DashboardContext';

export const TransferListCard = () => {
	const { transferList } = useDashboard();

	const [recepient, setRecepient] = useState<TransferPerson | null>(
		transferList[0]
	);
	const [formData, setFormData] = useState({ amount: '0.0' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ amount: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};
	const updateRecepient = (person: TransferPerson) => {
		setRecepient(person);
	};

	return (
		<>
			<div className='flex gap-4 lg:gap-2 items-center md:justify-between mb-6 md:pb-0'>
				{transferList.slice(0, 3).map((person) => {
					const { id, name, title, photo } = person;
					const isRecepient = recepient?.id === id;
					const recepientClass = `md:text-base text-sm text-center text-nowrap ${isRecepient ? 'font-semibold' : 'font-normal'}`;
					return (
						<label
							key={id}
							className='flex flex-col gap-6 items-center justify-between cursor-pointer'
							onClick={() => updateRecepient(person)}
							htmlFor='transfer-to-recipient'
							tabIndex={0}
						>
							<img
								src={photo}
								width={50}
								height={50}
								className='md:w-[70px] md:h-70px] rounded-full'
								alt={name}
								loading='lazy'
							/>
							<div className='flex flex-col items-center'>
								<p className={`${recepientClass} text-custom-base`}>{name}</p>
								<p className={`${recepientClass} text-form`}>{title}</p>
							</div>
						</label>
					);
				})}
				<button
					aria-label='View all recipients'
					className='flex items-center justify-center bg-white p-2 rounded-full shadow-md hover:bg-custom-gray min-w-[50px] min-h-[50px]'
				>
					<img
						src={ArrowIcon}
						width={7}
						height={13}
						alt='View all recipients'
						loading='lazy'
					/>
				</button>
			</div>
			<div className='flex justify-between items-center pb-4 md:pb-0'>
				<div className='md:text-base text-sm text-form'>Write Amount</div>
				<form
					onSubmit={handleSubmit}
					className='flex relative'
				>
					<input
						id='transfer-to-recipient'
						type='number'
						required
						min='1.00'
						value={formData.amount}
						step='0.01'
						onChange={handleChange}
						className={`border border-custom-border
							md:h-[50px] h-[40px] focus:ring-1 focus:ring-gray-300
							  text-form font-base leading-[100%] pl-5 w-[187px] md:w-[265px] md:pr-[125px] pr-[100px] rounded-[50px] bg-custom-gray`}
					/>
					<Button
						className='absolute flex justify-between right-0 !rounded-[50px] max-w-[100px] md:w-[125px] h-[40px]'
						type='submit'
					>
						<span className='md:text-base text-sm font-medium'>Send</span>
						<img
							src={SendIcon}
							width={16}
							height={14}
							className='md:w-[26px] md:h-[23px]'
							alt='send button icon'
							loading='lazy'
						/>
					</Button>
				</form>
			</div>
		</>
	);
};
