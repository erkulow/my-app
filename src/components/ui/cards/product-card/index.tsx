import { FC, useState } from 'react'
import { Favorite } from '../../icons'
import Counter from '../../counter'
import { IProduct } from '../../../../common/products.interface'

const ProductCard: FC<IProduct> = ({ name, image, favorite, price }) => {
	const [favoriteValue, setFavoriteValue] = useState<boolean>(favorite)

	const favoriteHandler = () => {
		setFavoriteValue(!favoriteValue)
	}
	return (
		<div className='max-w-[200px] flex flex-col p-2 relative gap-2 bg-white'>
			<img className=' object-cover rounded-lg' src={image} alt='img' />
			<span
				className='p-2 right-3 top-3 rounded-md cursor-pointer absolute bg-gray-100/80'
				onClick={favoriteHandler}
			>
				<Favorite active={favorite} />
			</span>
			<p>{name}</p>
			<p>{price} с</p>
			<span className='text-xs text-green-500'>В наличии</span>
			<span className='text-xs text-[#3286C2]'>Комплект</span>
			<Counter />
		</div>
	)
}

export default ProductCard
