import { ComingSoon } from '../components/ComingSoon';
import Tabs from '../components/Tabs';
import { Form } from '../containers/Form/Form';
const tabs = [
	{ id: 'edit', label: 'Edit Profile', content: <Form /> },
	{ id: 'preference', label: 'Preferences', content: <ComingSoon /> },
	{ id: 'security', label: 'Security', content: <ComingSoon /> },
];

const SettingPage = () => {
	return (
		<div className=' bg-white rounded-3xl md:p-10 p-6 m-6 md:m-0'>
			<Tabs tabs={tabs} />
		</div>
	);
};
export default SettingPage;
