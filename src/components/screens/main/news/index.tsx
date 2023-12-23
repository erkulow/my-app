import Container from '../../../../styles/container'
import NewsContent from '../../../ui/news-content/news-content'

const News = () => {
	return (
		<Container>
			<div className='w-full flex flex-col gap-6 mb-10'>
				<p className='title'>Новости</p>
				<div className='w-full grid grid-cols-3 md:grid-cols-1'>
					{[1, 2].map((item, index) => (
						<NewsContent key={index} />
					))}
				</div>
			</div>
		</Container>
	)
}

export default News
