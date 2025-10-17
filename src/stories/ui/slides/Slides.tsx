import { uniqueId } from 'lodash';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

interface ISwiperOptionsProps extends SwiperOptions {
	className?: string;
	slides: ReactNode[];
}

const Slides = ({
	modules,
	navigation = true,
	spaceBetween = 50,
	pagination = { clickable: true },
	height,
	slides,
	...props
}: ISwiperOptionsProps) => {
	return (
		<Swiper
			{...props}
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={spaceBetween}
			navigation={navigation}
			pagination={pagination}
		>
			{slides.map(slide => (
				<SwiperSlide
					key={uniqueId('slide-')}
					style={{ height: `${height}px` }}
					children={slide}
				/>
			))}
		</Swiper>
	);
};

export default Slides;
