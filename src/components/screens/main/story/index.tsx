import Container from '../../../../styles/container'
import HistoryCard from '../../../ui/cards/history-card'
import Sceleton from '../../../ui/cards/history-card/sceleton'

const data = [
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		title: 'Скидки',
	},
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		title: 'Акции',
	},
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		title: 'Распродажа',
	},
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		title: 'Подарки',
	},
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		title: 'Подарки',
	},
]

const Hostory = () => {
	return (
		<div className='w-full flex gap-[30px] p-6 overflow-x-scroll mb-10'>
			{data.map((item, index) => (
				<HistoryCard key={index} img={item.img} title={item.title} />
			))}
			{data.map((item, index) => (
				<Sceleton key={index} />
			))}
		</div>
	)
}

export default Hostory
