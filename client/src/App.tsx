import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import Layout from './containers/Layout';
import { lazy, Suspense } from 'react';
import { UserProvider } from './context/UserSettingsContext';
import { DashboardProvider } from './context/DashboardContext';
import NotificationComponent from './services/NotificationService/Notification';
import { Loader } from './components/Loader';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const SettingPage = lazy(() => import('./pages/SettingPage'));

const App = () => {
	return (
		<UserProvider>
			<Router>
				<DashboardProvider>
					<NotificationComponent />
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route
								path='/'
								element={<Layout />}
							>
								<Route
									index
									element={
										<Navigate
											to='/overview'
											replace
										/>
									}
								/>
								<Route
									path='overview'
									element={<DashboardPage />}
								/>
								<Route
									path='setting'
									element={<SettingPage />}
								/>
							</Route>
						</Routes>
					</Suspense>
				</DashboardProvider>
			</Router>
		</UserProvider>
	);
};

export default App;
