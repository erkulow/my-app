import Container from '../../../../styles/container'
import CategoryCard from '../../../ui/cards/category-card'

const data = [
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	//
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
	{
		title: 'Ванны',
		quantity: 3000,
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
	},
]

const Categorys = () => {
	return (
		<Container>
			<div className='w-full flex flex-col gap-6 mb-10'>
				<p className='title'>Категории</p>
				<div className='w-full grid grid-cols-7 gap-2 md:grid-cols-4 gap-y-2'>
					{data.map((item, index) => (
						<CategoryCard key={index} {...item} />
					))}
				</div>
			</div>
		</Container>
	)
}

export default Categorys
