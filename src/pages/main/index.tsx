import { Fragment } from 'react'
import Categorys from '../../components/screens/main/category'
import News from '../../components/screens/main/news'
import Products from '../../components/screens/main/products'
import AdressStores from '../../components/screens/main/store-addresses'
import Hostory from '../../components/screens/main/story'

const data = [
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
	{
		image: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		favorite: false,
		name: 'Держатель для лейки BOOU PG605 ',
		price: 1200,
	},
]

const Main = () => {
	return (
		<Fragment>
			<Hostory />
			<Categorys />
			<Products title='Хиты продаж' data={data} />
			<News />
			<Products title='Аукционные товары' data={data} />
			<AdressStores />
		</Fragment>
	)
}

export default Main
