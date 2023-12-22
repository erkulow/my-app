import Categorys from '../../components/screens/main/category'
import Products from '../../components/screens/main/products'
import Hostory from '../../components/screens/main/story'

const Main = () => {
	return (
		<div>
			<Hostory />
			<Categorys />
			<Products title='Категории' />
			<Products title='Хиты продаж' />
		</div>
	)
}

export default Main
