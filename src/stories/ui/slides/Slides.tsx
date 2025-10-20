import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

interface IProps extends SwiperOptions {
	className?: string;
	children: ReactNode;
}

const Slides = ({
	modules,
	navigation = true,
	spaceBetween = 50,
	pagination = { clickable: true },
	children,
	...props
}: IProps) => (
	<Swiper
		{...props}
		modules={[Navigation, Pagination, A11y]}
		spaceBetween={spaceBetween}
		navigation={navigation}
		pagination={pagination}
	>
		{children}
	</Swiper>
);

export default Slides;
