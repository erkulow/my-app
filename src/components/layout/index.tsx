import Footer from './footer'
import Header from './header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main className='min-h-[calc(100vh_-_80px)] bg-[#f8faff]'>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
