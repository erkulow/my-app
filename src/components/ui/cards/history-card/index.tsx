interface IProps {
	img: string
	title: string
	isLoading: boolean
}

const HistoryCard = () => {
	return (
		<div className='h-[81px] flex flex-col items-center justify-center'>
			<img
				src=''
				alt='img'
				className='w-[60px] h-[60px] rounded-full object-cover'
			/>
			<span className='text-xs'>Подарки</span>
		</div>
	)
}

export default HistoryCard
