import { Fragment } from 'react'
import Categorys from '../../components/screens/main/category'
import News from '../../components/screens/main/news'
import Products from '../../components/screens/main/products'
import AdressStores from '../../components/screens/main/store-addresses'
import Hostory from '../../components/screens/main/story'

const Main = () => {
	return (
		<Fragment>
			<Hostory />
			<Categorys />
			<Products title='Хиты продаж' />
			<News />
			<Products title='Аукционные товары' />
			<AdressStores />
		</Fragment>
	)
}

export default Main
