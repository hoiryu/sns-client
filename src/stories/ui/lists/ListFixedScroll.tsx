import { useVirtualizer } from '@tanstack/react-virtual';
import { ElementType, useRef } from 'react';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps<T> {
	component: ElementType;
	data: T[];
	size: number;
}

/**
 * Fixed
 * 모든 List 의 크기가 고정된 경우
 */
const ListFixedScroll = <T,>({ data, component, size }: IProps<T>) => {
	const Component = component;
	const parentRef = useRef<HTMLDivElement | null>(null);

	const virtualizer = useVirtualizer({
		count: data.length || 0,
		getScrollElement: () => parentRef.current,
		estimateSize: () => size,
		overscan: 5,
	});

	const items = virtualizer.getVirtualItems();

	return (
		<Container
			ref={parentRef}
			className={cn('overflow-auto')}
			style={{
				height: `${size * 5}px`,
			}}
		>
			<Box className={cn('relative w-full')} style={{ height: virtualizer.getTotalSize() }}>
				{items.map(({ key, index, size, start }) => (
					<Component
						key={key}
						data={data[index]}
						className={cn('absolute top-0 left-0 w-full')}
						style={{
							height: `${size}px`,
							translate: `0 ${start - virtualizer.options.scrollMargin}px`,
						}}
					/>
				))}
			</Box>
		</Container>
	);
};
export default ListFixedScroll;
