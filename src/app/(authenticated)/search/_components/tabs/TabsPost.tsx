'use client';
import { SyntheticEvent, useCallback, useEffect, useMemo } from 'react';
import { useQueryString } from '~hooks/useQueryString';
import { TTabsValueCategorySearch, useStoreCategorySearch } from '~src/stores/storeSearch';
import Container from '~stories/ui/containers/Container';
import Tab from '~stories/ui/tabs/Tab';
import Tabs from '~stories/ui/tabs/Tabs';
import { cn } from '~utils/cn';

const TabsPost = () => {
	const { getQueryString, setQueryString } = useQueryString<TTabsValueCategorySearch>();
	const queryCategory = getQueryString('category');
	const { category, setCategory } = useStoreCategorySearch();

	const tabs = useMemo(
		() => [
			{
				name: 'popular',
				value: 'popular',
			},
			{
				name: 'live',
				value: 'live',
			},
		],
		[],
	);

	const handleChange = useCallback((_1: SyntheticEvent, value: TTabsValueCategorySearch) => {
		setQueryString({ category: value });
		setCategory(value);
	}, []);

	useEffect(() => {
		if (queryCategory) setCategory(queryCategory);
		else {
			setCategory('popular');
			setQueryString({ category: 'popular' });
		}
	}, []);

	return (
		<Container className={cn('sticky top-0 z-10 px-4')}>
			<Tabs
				orientation='horizontal'
				centered
				value={category || false}
				aria-label='메인 탭'
				className={cn('backdrop-blur-lg')}
				onChange={handleChange}
			>
				{tabs.map(({ name, value }) => (
					<Tab key={`${name}-${value}`} label={name} value={value} />
				))}
			</Tabs>
		</Container>
	);
};

export default TabsPost;
