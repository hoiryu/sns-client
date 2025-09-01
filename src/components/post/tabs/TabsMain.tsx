'use client';
import { SyntheticEvent } from 'react';
import { TTabsMainValue, useStoreTabsMain } from '~src/stores/storeTabsMain';
import IconBookmark from '~stories/ui/icons/IconBookmark';
import IconRecommend from '~stories/ui/icons/IconRecommend';
import Tab from '~stories/ui/tabs/Tab';
import Tabs from '~stories/ui/tabs/Tabs';

const TabsMain = () => {
	const { value, setValue } = useStoreTabsMain();
	const tabs = [
		{
			name: 'recommended',
			value: 'recommended',
			icon: <IconRecommend />,
		},
		{
			name: 'following',
			value: 'following',
			icon: <IconBookmark />,
		},
	];

	const handleChange = (e: SyntheticEvent, value: TTabsMainValue) => setValue(value);

	return (
		<Tabs
			orientation='horizontal'
			centered
			value={value}
			aria-label='메인 탭'
			onChange={handleChange}
		>
			{tabs.map(({ name, value: v, icon }) => (
				<Tab key={`${name}-${v}`} icon={icon} label={name} value={v} />
			))}
		</Tabs>
	);
};

export default TabsMain;
