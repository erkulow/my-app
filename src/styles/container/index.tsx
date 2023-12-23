const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full flex justify-center px-14 xl:px-10 lg:px-8 md:px-2 bg-[#F8FAFF] min-h-[calc(100vh_-_80px)]'>
			<div className='w-full max-w-[1440px]'>{children}</div>
		</div>
	)
}

export default Container
