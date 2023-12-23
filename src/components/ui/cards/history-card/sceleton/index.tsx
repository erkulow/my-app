const Sceleton = () => {
	return (
		<>
			<div className='h-[80px] shrink-0 w-[60px] gap-2 flex flex-col items-center justify-center'>
				<div className='w-[60px] h-[60px] skeleton rounded-full min-w-[60px] bg-gray-200'></div>
				<div className='skeleton h-3 w-full bg-gray-200'></div>
			</div>
		</>
	)
}

export default Sceleton
