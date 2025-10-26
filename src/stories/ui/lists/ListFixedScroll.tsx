'use client';
import { InfiniteData, UseSuspenseInfiniteQueryResult } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ElementType, Fragment, useEffect, useMemo, useRef } from 'react';
import { IPaginate } from '~models/api';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import ProgressCircular from '~stories/ui/progress/ProgressCircular';
import { cn } from '~utils/cn';

interface IProps {
	component: ElementType; // UI
	componentEmpty: ElementType; // No data UI
	query: UseSuspenseInfiniteQueryResult<InfiniteData<IPaginate<object>>, Error>;
	size: number;
}

/**
 * Fixed
 * 모든 List 의 크기가 고정된 경우
 * @property component 값이 있는 경우
 * @property componentEmpty 값이 없는 경우
 * @property query UseSuspenseInfiniteQueryResult
 * @property size UI Height 값 (Default: 100)
 */
const ListFixedScroll = ({ query, component, componentEmpty, size = 100 }: IProps) => {
	const Component = useMemo(() => component, []);

	const ComponentEmpty = useMemo(() => componentEmpty, []);

	const parentRef = useRef<HTMLDivElement | null>(null);

	const { data, status, isFetchingNextPage, fetchNextPage } = query;

	const totalRows = useMemo(() => (data ? data.pages.flatMap(d => d.data) : []), [data.pages]);

	const hasNextPage = useMemo(
		() => !!(data.pages.at(-1)?.cursor.after && data.pages.at(-1)?.next),
		[data.pages],
	);

	const virtualizer = useVirtualizer({
		count: hasNextPage ? totalRows.length + 1 : totalRows.length,
		overscan: 1,
		getScrollElement: () => parentRef.current,
		estimateSize: () => size,
	});

	const virtualItems = useMemo(
		() => virtualizer.getVirtualItems(),
		[virtualizer.getVirtualItems()],
	);

	useEffect(() => {
		const lastItem = virtualItems.at(-1);

		if (!lastItem) return;

		// 다음 Cursor 요청
		if (lastItem.index > totalRows.length - 1 && hasNextPage && !isFetchingNextPage)
			fetchNextPage();
	}, [hasNextPage, fetchNextPage, totalRows.length, isFetchingNextPage, virtualItems]);

	return (
		<Container
			ref={parentRef}
			className={cn('overflow-auto')}
			style={{
				height: `${size * 5}px`,
			}}
		>
			{status === 'success' && !data.pages[0] && <ComponentEmpty />}
			{status === 'success' && data.pages[0] && (
				<Box
					className={cn('relative w-full')}
					style={{ height: virtualizer.getTotalSize() }}
				>
					{virtualItems.map(({ key, index, start, size }) => {
						const isLoaderRow = index >= totalRows.length;

						const row = totalRows[index];

						if (isLoaderRow)
							return (
								<Fragment key={key}>
									{hasNextPage && (
										<Box
											className={cn('absolute top-0 left-0 w-full')}
											style={{
												height: `${size ? `${size}px` : undefined}`,
												translate: `0 ${start - virtualizer.options.scrollMargin}px`,
											}}
											children={
												<Box
													className={cn(
														'flex h-full items-center justify-center',
													)}
												>
													<ProgressCircular color='warning' size={50} />
												</Box>
											}
										/>
									)}
								</Fragment>
							);
						return (
							<Component
								key={key}
								data-index={index}
								data={row}
								className={cn('absolute top-0 left-0 w-full')}
								style={{
									height: `${size}px`,
									translate: `0 ${start - virtualizer.options.scrollMargin}px`,
								}}
							/>
						);
					})}
				</Box>
			)}
		</Container>
	);
};
export default ListFixedScroll;
