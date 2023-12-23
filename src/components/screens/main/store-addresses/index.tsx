import AdressCard from '../../../ui/cards/adress-card'

const data = [
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		name: 'Iskender home',
		adress: 'Кыргызстан, г. Бишкек ул. Турусбекова A167',
		schedule: '08:00 - 22:00',
		phoneNumber: '+996 500 345 345',
	},
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		name: 'Iskender home',
		adress: 'Кыргызстан, г. Бишкек ул. Турусбекова A167',
		schedule: '08:00 - 22:00',
		phoneNumber: '+996 500 345 345',
	},
	{
		img: 'https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=',
		name: 'Iskender home',
		adress: 'Кыргызстан, г. Бишкек ул. Турусбекова A167',
		schedule: '08:00 - 22:00',
		phoneNumber: '+996 500 345 345',
	},
]

const AdressStores = () => {
	return (
		<div className='w-full flex flex-col gap-6 mb-10'>
			<p className='title'>Адреса магазинов</p>
			<div className='grid grid-cols-3 gap-4 md:grid-cols-1'>
				{data.map((item, index) => (
					<AdressCard key={index} {...item} />
				))}
			</div>
		</div>
	)
}

export default AdressStores
