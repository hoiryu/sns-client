import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { ElementType, useRef } from 'react';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps<T> {
	component: ElementType;
	data: T[];
	size?: number;
}

/**
 * Window
 * body scroll 을 Virtualizer 로 사용.
 * size 있을 경우 고정
 */
const ListWindowScroll = <T,>({ data, component, size }: IProps<T>) => {
	const Component = component;
	const ref = useRef<HTMLDivElement | null>(null);

	const virtualizer = useWindowVirtualizer({
		count: data ? data.length : 0,
		estimateSize: () => size || 100,
		overscan: 5,
		scrollMargin: ref.current?.offsetTop ?? 0,
		measureElement: size ? undefined : el => el.getBoundingClientRect().height,
	});

	const items = virtualizer.getVirtualItems();

	return (
		<Container ref={ref}>
			<Box className={cn('relative w-full')} style={{ height: virtualizer.getTotalSize() }}>
				{items.map(({ key, index, start, size }) => (
					<Component
						key={key}
						ref={virtualizer.measureElement}
						data-index={index}
						data={data[index]}
						className={cn('absolute top-0 left-0 w-full')}
						style={{
							height: `${size ? `${size}px` : undefined}`,
							translate: `0 ${start - virtualizer.options.scrollMargin}px`,
						}}
					/>
				))}
			</Box>
		</Container>
	);
};
export default ListWindowScroll;
