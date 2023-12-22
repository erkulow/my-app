interface IProps {
	title: string
	description: string
	image: string
}

const CategoryCard = () => {
	return (
		<div className='bg-white flex flex-col max-w-[170px] rounded-lg'>
			<div className='flex flex-col p-2'>
				<p className='text-[14px]'>Ванны</p>
				<span className='text-xs text-gray-400'>3000 товаров</span>
			</div>
			<img src='' alt='img' />
		</div>
	)
}

export default CategoryCard
