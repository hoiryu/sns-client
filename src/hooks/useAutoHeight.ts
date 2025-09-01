import { debounce } from 'lodash';
import { RefObject, useEffect, useState } from 'react';

/**
 * 윈도우 기준 높이값 계산
 */
const useAutoHeight = (ref: RefObject<HTMLDivElement | null>) => {
	const [height, setHeight] = useState(0);

	const handleResize = debounce(() => {
		if (!ref?.current) return;
		const rect = ref.current.getBoundingClientRect();
		setHeight(window.innerHeight - rect.top);
	}, 500);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			handleResize.cancel();
			window.removeEventListener('resize', handleResize);
		};
	}, [ref]);

	return height;
};

export default useAutoHeight;
