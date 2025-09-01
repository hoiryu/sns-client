'use client';
import { SyntheticEvent } from 'react';
import { TTabsMainValue, useStoreTabsMain } from '~src/stores/storeTabsMain';
import Tab from '~stories/ui/tabs/Tab';
import Tabs from '~stories/ui/tabs/Tabs';

const TabsMain = () => {
	const { value, setValue } = useStoreTabsMain();
	const tabs = [
		{
			name: 'recommended',
			value: 'recommended',
			icon: '',
		},
		{
			name: 'following',
			value: 'following',
			icon: '',
		},
	];

	const handleChange = (e: SyntheticEvent, value: TTabsMainValue) => setValue(value);

	return (
		<Tabs orientation='horizontal' value={value} aria-label='메인 탭' onChange={handleChange}>
			{tabs.map(({ name, value: v, icon }) => (
				<Tab key={`${name}-${v}`} icon={icon} label={name} value={v} />
			))}
		</Tabs>
	);
};

export default TabsMain;
