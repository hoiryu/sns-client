'use client';
import { SyntheticEvent } from 'react';
import { ITabsValuePost, storeTabsPost } from '~src/stores/storeTabsPost';
import Container from '~stories/ui/containers/Container';
import IconBookmark from '~stories/ui/icons/IconBookmark';
import IconRecommend from '~stories/ui/icons/IconRecommend';
import Tab from '~stories/ui/tabs/Tab';
import Tabs from '~stories/ui/tabs/Tabs';
import { cn } from '~utils/cn';

const TabsPost = () => {
	const { value, setValue } = storeTabsPost();
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

	const handleChange = (e: SyntheticEvent, value: ITabsValuePost) => setValue(value);

	return (
		<Container className={cn('sticky top-0 z-10 px-4')}>
			<Tabs
				orientation='horizontal'
				centered
				value={value}
				aria-label='메인 탭'
				className={cn('backdrop-blur-lg')}
				onChange={handleChange}
			>
				{tabs.map(({ name, value: v, icon }) => (
					<Tab key={`${name}-${v}`} icon={icon} label={name} value={v} />
				))}
			</Tabs>
		</Container>
	);
};

export default TabsPost;
