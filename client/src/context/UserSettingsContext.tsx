import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchUser, User } from '../api/api';

interface UserContextType {
	user: User;
	updateUser: (updatedUser: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User>({
		id: '',
		name: '',
		userName: '',
		dob: '',
		email: '',
		password: '',
		presentAddress: '',
		permanentAddress: '',
		postalCode: '',
		city: '',
		country: '',
		image: '',
	});

	useEffect(() => {
		if (user.id) return;
		fetchUser().then(setUser);
	}, []);

	const updateUser = (updatedUser: Partial<User>) => {
		if (!user) return;
		const newUser = { ...user, ...updatedUser };
		setUser(newUser);
		// PUT call to update user data like name, email, etc.
		// PUT call to update user image
	};

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};
