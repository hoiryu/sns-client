'use client';
import { SyntheticEvent, useCallback } from 'react';
import { useQueryString } from '~hooks/useQueryString';
import { ITabsValueSearch } from '~src/stores/search';
import Container from '~stories/ui/containers/Container';
import Tab from '~stories/ui/tabs/Tab';
import Tabs from '~stories/ui/tabs/Tabs';
import { cn } from '~utils/cn';

const TabsSearch = () => {
	const { getQueryString, setQueryString } = useQueryString();
	const value = getQueryString('category');
	const tabs = [
		{
			name: 'popular',
			value: 'popular',
		},
		{
			name: 'live',
			value: 'live',
		},
	];

	const handleChange = useCallback(
		(_: SyntheticEvent, value: ITabsValueSearch) => setQueryString({ category: value }),
		[setQueryString],
	);

	return (
		<Container className={cn('sticky top-0 z-10 px-4')}>
			<Tabs
				orientation='horizontal'
				centered
				value={value || 'popular'}
				aria-label='Search Tab'
				className={cn('backdrop-blur-lg')}
				onChange={handleChange}
			>
				{tabs.map(({ name, value: v }) => (
					<Tab key={`${name}-${v}`} label={name} value={v} />
				))}
			</Tabs>
		</Container>
	);
};

export default TabsSearch;
