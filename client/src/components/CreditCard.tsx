import ChipWhite from '../assets/icons/card/chip-white.svg';
import ChipGray from '../assets/icons/card/chip-gray.svg';
import { Card } from '../api/api';
import cardCompany from '../assets/icons/card/card-company.svg';
import { cardTile } from '../tailwind';

const CardTextSet = ({ text, value }: { text: string; value: string }) => {
	return (
		<div className='flex flex-col'>
			<div className='font-normal text-xs'>{text}</div>
			<div className='font-semibold md:text-xl text-base'>{value}</div>
		</div>
	);
};

const maskCardNumber = (cardNumber: string) => {
	if (cardNumber.length === 16) {
		return `${cardNumber.slice(0, 4)} **** **** ${cardNumber.slice(12, 16)}`;
	}
	return cardNumber;
};

export const CreditCard = ({ card }: { card: Card }) => {
	const { balance, cardHolder, validThr, type, cardNumber } = card;
	return (
		<div
			className={`${cardTile} ${type === 'gray' ? 'text-white bg-gradient-to-br from-[#5B5A6F] to-black ' : 'text-default border border-custom-border'}`}
		>
			<div className='flex justify-between items-start md:p-6 p-4'>
				<div className='flex flex-col gap-2 md:gap-4'>
					<CardTextSet
						text='Balance'
						value={balance.toString()}
					/>
					<div className='flex justify-between gap-4'>
						<CardTextSet
							text='CARD HOLDER'
							value={cardHolder}
						/>

						<CardTextSet
							text='VALID THRU'
							value={validThr}
						/>
					</div>
				</div>
				<img
					src={type === 'gray' ? ChipWhite : ChipGray}
					alt='chip'
					width={35}
					height={35}
				/>
			</div>
			<div
				className={`flex justify-between items-center md:p-6 p-4 py-3  ${type === 'gray' ? 'bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)]' : 'border-t border-custom-border'}`}
			>
				<span className='md:text-xl text-base'>
					{' '}
					{maskCardNumber(cardNumber)}
				</span>
				<span>
					<img
						src={cardCompany}
						width={27}
						height={19}
						className='md:w-[44px] md:h-[30px]'
						alt='Card Company Icon'
					/>
				</span>
			</div>
		</div>
	);
};
