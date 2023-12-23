import { FC } from 'react'

interface IProps {
	title: string
	quantity: number
	image: string
}

const CategoryCard: FC<IProps> = ({ title, quantity, image }) => {
	return (
		<div className='bg-white flex flex-col max-w-[170px] rounded-lg'>
			<div className='flex flex-col p-2'>
				<p className='text-[14px]'>{title}</p>
				<span className='text-xs text-gray-400'>
					{quantity} товаров
				</span>
			</div>
			<img className=' rounded-b-lg' src={image} alt='img' />
		</div>
	)
}

export default CategoryCard
