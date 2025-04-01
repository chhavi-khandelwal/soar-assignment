import Button from '../../components/Button';
import {
	getMaxDate,
	getMinDate,
	validateEmail,
	validatePassword,
} from './utils';

import { ImageUpload } from '../../components/ImageUpload';
import { useUser } from '../../context/UserSettingsContext';
import { useEffect, useState } from 'react';
import { User } from '../../api/api';
import TextInput, { inputClass } from '../../components/TextInput';
import NotificationService from '../../services/NotificationService/NotificationService';

export const Form = () => {
	const { user, updateUser } = useUser();
	const [formData, setFormData] = useState<User>(user);
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});
	useEffect(() => {
		if (user) setFormData(user);
	}, [user]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const emailError = validateEmail(formData.email);
		const passwordError = validatePassword(formData.password);
		if (emailError || passwordError) {
			NotificationService.show(emailError || passwordError, 'error');

			setErrors({
				email: emailError,
				password: passwordError,
			});
			return;
		}
		updateUser(formData);
	};

	return (
		<div className='flex md:flex-row flex-col md:items-start items-center md:gap-10'>
			<div className='md:mt-0 mt-8'>
				<ImageUpload alt='user-profile' />
			</div>

			<form
				onSubmit={handleSubmit}
				className='flex flex-col md:gap-6 gap-4 w-full  text-xs md:text-base'
			>
				<div className='flex flex-col md:gap-6 gap-4'>
					<div className='flex flex-col md:flex-row justify-between md:gap-6 gap-4'>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='name'>Your Name</Label>
							<TextInput
								id='name'
								ariaLabel='your name'
								required
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='userName'>User Name</Label>
							<TextInput
								id='userName'
								ariaLabel='username'
								required
								value={formData.userName}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between md:gap-6 gap-4'>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='email'>Email</Label>
							<input
								type='email'
								id='email'
								aria-label='email'
								required
								value={formData.email}
								onChange={handleChange}
								className={`${inputClass} ${errors.email ? '!border-amber-700' : ''}`}
							/>
						</div>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='password'>Password</Label>
							<input
								type='password'
								id='password'
								aria-label='password'
								autoComplete='on'
								required
								minLength={8}
								pattern='.{8,}'
								value={formData.password}
								onChange={handleChange}
								className={`${inputClass} ${errors.password ? '!border-amber-700' : ''}`}
							/>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between md:gap-6 gap-4'>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='dob'>Date of birth</Label>
							<input
								type='date'
								id='dob'
								aria-label='date-of-birth'
								min={getMinDate()}
								max={getMaxDate()}
								required
								value={formData.dob}
								onChange={handleChange}
								className={`${inputClass}`}
							/>
						</div>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='presentAddress'>Present Address</Label>
							<TextInput
								id='presentAddress'
								ariaLabel='present-address'
								required
								value={formData.presentAddress}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between md:gap-6 gap-4'>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='permanentAddress'>Permanent Address</Label>
							<TextInput
								id='permanentAddress'
								ariaLabel='permanent-address'
								required
								value={formData.permanentAddress}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='city'>City</Label>
							<TextInput
								id='city'
								ariaLabel='city'
								required
								value={formData.city}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between md:gap-6 gap-4'>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='postalCode'>Postal Code</Label>
							<TextInput
								id='postalCode'
								ariaLabel='postal-code'
								required
								value={formData.postalCode}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col gap-3 flex-1/2'>
							<Label labelFor='Country'>Country</Label>
							<TextInput
								id='country'
								ariaLabel='Country'
								required
								value={formData.country}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className='flex justify-end md:py-4 md:mt-4'>
					<Button
						type='submit'
						ariaLabel='setting-form-submit-button'
						className='min-h-[40px] md:min-h-[50px]'
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};

const Label = ({
	labelFor,
	children,
}: {
	labelFor: string;
	children: React.ReactNode;
}) => {
	return (
		<label
			htmlFor={labelFor}
			className='font-normal leading-[100%] color-custom-base md:text-base text-xs'
		>
			{children}
		</label>
	);
};
