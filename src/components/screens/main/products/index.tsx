import { FC } from 'react'
import ProductCard from '../../../ui/cards/product-card'

interface IProduct {
	image: string
	favorite: boolean
	name: string
	price: number
}

interface IProps {
	title?: string
	data?: IProduct
}

const Products: FC<IProps> = ({ title }) => {
	return (
		<div className='flex flex-col'>
			<p>{title}</p>
			<div className='w-full'>
				<ProductCard />
			</div>
		</div>
	)
}

export default Products
