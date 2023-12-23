import { useState } from 'react'
import { Favorite } from '../../icons'
import Counter from '../../counter'

const ProductCard = () => {
	const [favorite, setFavorite] = useState<boolean>(false)

	const favoriteHandler = () => {
		setFavorite(!favorite)
	}
	return (
		<div className='max-w-[200px] flex flex-col p-2 relative gap-2 bg-white'>
			<img
				className=' object-cover rounded-lg'
				src='https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY='
				alt='img'
			/>
			<span
				className='p-2 right-3 top-3 rounded-md cursor-pointer absolute bg-gray-100/80'
				onClick={favoriteHandler}
			>
				<Favorite active={favorite} />
			</span>
			<p>Держатель для лейки BOOU PG605 </p>
			<p>1294 с</p>
			<span className='text-xs text-green-500'>В наличии</span>
			<span className='text-xs text-[#3286C2]'>Комплект</span>
			<Counter />
		</div>
	)
}

export default ProductCard
