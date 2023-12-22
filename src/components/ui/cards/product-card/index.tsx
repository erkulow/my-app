import Counter from '../../counter'
import { Favorite } from '../../icons'

const ProductCard = () => {
	return (
		<div className='max-w-[200px] flex flex-col p-2 relative'>
			<img src='' alt='img' />
			<span className='p-1 rounded-md absolute'>
				<Favorite />
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
