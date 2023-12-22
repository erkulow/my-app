import SearchInput from '../../ui/forms/search-input'
import Logo from '../../ui/logo/logo'

const Header = () => {
	return (
		<div className='w-full flex justify-center px-14 bg-primary'>
			<header className='w-full max-w-[1440px] flex items-center p-4 gap-4'>
				<Logo />
				<div className='p-2 px-6 ml-4 bg-black/10 rounded-3xl flex items-center gap-2 text-white cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='15'
						height='9'
						viewBox='0 0 15 9'
						fill='none'
					>
						<rect width='15' height='1' rx='0.5' fill='#D9D9D9' />
						<rect
							y='4'
							width='15'
							height='1'
							rx='0.5'
							fill='#D9D9D9'
						/>
						<rect
							y='8'
							width='15'
							height='1'
							rx='0.5'
							fill='#D9D9D9'
						/>
					</svg>
					<span>Каталог</span>
				</div>
				<SearchInput placeholder='Поиск' />
				<div className='flex items-center gap-2 '>
					<div className='flex items-center gap-2 pr-2 border-r-2'>
						<div className='flex flex-col items-end'>
							<span className='text-xs text-white text-[10px]'>
								Добро пожаловать
							</span>
							<div className='flex items-center gap-1 text-white text-[14px]'>
								<span className=' cursor-pointer'>Вход</span>
								<span>/</span>
								<span className=' cursor-pointer'>
									Регистрация
								</span>
							</div>
						</div>
						<span className='p-2 bg-[#FFF] border rounded-full cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='13'
								height='15'
								fill='none'
								viewBox='0 0 13 15'
							>
								<circle
									cx='6.202'
									cy='4.155'
									r='3.384'
									stroke='#BEBEBE'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='1.063'
								></circle>
								<path
									stroke='#BEBEBE'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='1.063'
									d='M.833 12.247c0-.238.053-.473.156-.687.324-.649 1.238-.992 1.997-1.148a11.889 11.889 0 011.66-.234c1.033-.09 2.072-.09 3.105 0 .558.04 1.113.118 1.66.234.759.156 1.673.467 1.997 1.148.208.436.208.944 0 1.38-.324.681-1.238.992-1.997 1.142-.546.121-1.101.201-1.66.24-.84.07-1.686.084-2.528.039-.195 0-.383 0-.577-.04a10.938 10.938 0 01-1.654-.24c-.765-.149-1.672-.46-2.003-1.14a1.615 1.615 0 01-.156-.694z'
									clipRule='evenodd'
								></path>
							</svg>
						</span>
					</div>
					<span className='p-2 bg-[#FFF] border rounded-full cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='16'
							fill='none'
							viewBox='0 0 17 16'
						>
							<path
								stroke='#0063A9'
								strokeLinecap='round'
								strokeWidth='1.06'
								d='M.707 1.014l.884.177a1.413 1.413 0 011.13 1.245l.124 1.252m0 0l.767 6.393c.086.71.688 1.244 1.403 1.244h7.127a2.473 2.473 0 002.399-1.873l.936-3.745a1.625 1.625 0 00-1.576-2.02H2.845z'
							></path>
							<path
								stroke='#0063A9'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='1.06'
								d='M9.368 6.547H5.702'
							></path>
							<circle
								cx='5.671'
								cy='13.998'
								r='1.146'
								fill='#0063A9'
							></circle>
							<circle
								cx='12.544'
								cy='13.998'
								r='1.146'
								fill='#0063A9'
							></circle>
						</svg>
					</span>
				</div>
			</header>
		</div>
	)
}

export default Header
