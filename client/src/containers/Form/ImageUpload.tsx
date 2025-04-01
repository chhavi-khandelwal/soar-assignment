import { useState } from 'react';
import EditPencil from '../../assets/icons/edit-pencil.svg';
import IconButton from '../../components/IconButton';
import { useUser } from '../../context/UserSettingsContext';

export const ImageUpload = ({ alt }: { alt: string }) => {
	const { user, updateUser } = useUser();
	const [preview, setPreview] = useState<string | undefined>(user.image);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
				updateUser({ ...user, image: reader.result as string });
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='relative w-[90px] h-[90px] rounded-full flex items-center justify-center bg-custom-gray'>
			<input
				type='file'
				accept='image/*'
				id='image-upload'
				onChange={handleImageChange}
				className='absolute bottom-0 right-0 opacity-0 cursor-pointer z-10 !min-w-[30px] !w-[30px] !h-[30px] rounded-full'
				aria-label='Upload Image'
				tabIndex={-1}
			/>
			{preview && (
				<div className='relative w-full h-full rounded-full flex items-center justify-center object-contain overflow-hidden'>
					<img
						src={preview}
						alt={alt}
						width={90}
						height={90}
						className=' flex cursor-text'
						loading='lazy'
					/>
				</div>
			)}
			<label
				htmlFor='image-upload'
				className='absolute bottom-0 right-0'
			>
				<IconButton
					icon={EditPencil}
					ariaLabel='user-icon'
					className='absolute bottom-0 right-0 !bg-custom-base !min-w-[30px] !w-[30px] !h-[30px] z-9 justify-center'
					width={15}
					height={15}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							document.getElementById('image-upload')?.click();
						}
					}}
					onClick={() => document.getElementById('image-upload')?.click()}
				/>
			</label>
		</div>
	);
};
