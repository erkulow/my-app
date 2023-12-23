import 'swiper/css'

import ProductCard from '../../../ui/cards/product-card'
import { FC } from 'react'
import { IProduct } from '../../../../common/products.interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Container from '../../../../styles/container'

interface IProps {
	title?: string
	data?: IProduct[]
}

const Products: FC<IProps> = ({ title, data }) => {
	return (
		<div className='w-full flex flex-col gap-6 mb-10'>
			<p className='title'>{title}</p>
			<Swiper
				slidesPerView={6}
				spaceBetween={10}
				loop={true}
				navigation={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 1500,
				}}
				className='mySwiper w-full'
			>
				{data?.map((item: IProduct, index: number) => (
					<SwiperSlide key={index} className=''>
						<ProductCard {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Products
