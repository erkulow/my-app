import Container from '../../styles/container'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	)
}

export default Layout
