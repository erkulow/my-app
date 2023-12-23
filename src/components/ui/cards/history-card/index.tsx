import { FC } from 'react'

interface IData {
	img: string
	title: string
}

const HistoryCard: FC<IData> = ({ img, title }) => {
	return (
		<div className='h-[80px] w-[60px] gap-1 flex flex-col items-center justify-center'>
			<img
				src={img}
				alt='img'
				className='w-[60px] h-[60px] rounded-full object-cover min-w-[60px]'
			/>
			<span className='text-xs'>{title}</span>
		</div>
	)
}

export default HistoryCard
