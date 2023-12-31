import { FC } from 'react'

interface IProps {
	img: string
	name: string
	adress: string
	schedule: string
	phoneNumber: string
	geo?: string
}

const AdressCard: FC<IProps> = ({
	img,
	name,
	adress,
	schedule,
	phoneNumber,
	geo,
}) => {
	return (
		<div className='p-4 flex flex-col bg-white rounded-lg hover:shadow-md'>
			<div className='p-2 flex items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<img
						src={img}
						className='rounded-full h-[42px] w-[42px]'
						alt='img'
					/>
					<div className='flex flex-col'>
						<p>{name}</p>
						<a href='/' className='text-xs text-blue-500 underline'>
							открыть в карте
						</a>
					</div>
				</div>

				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 16 16'
					fill='none'
				>
					<path
						d='M2.66667 8.66664V7.3333L10.6667 7.3333L7 3.66664L7.94667 2.71997L13.2267 7.99997L7.94667 13.28L7 12.3333L10.6667 8.66664H2.66667Z'
						fill='#727272'
					/>
				</svg>
			</div>
			<div className='flex gap-2 items-center py-4'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='17'
					height='17'
					fill='none'
					viewBox='0 0 17 17'
				>
					<path
						fill='#0063A9'
						fillRule='evenodd'
						d='M8.5 2.465c-2.966 0-5.468 2.154-5.264 4.838.03.385.073.72.132.985.3 1.342 1.243 2.674 2.305 3.805a20.517 20.517 0 002.753 2.417.12.12 0 00.148 0c.579-.423 1.7-1.295 2.753-2.417 1.062-1.13 2.004-2.463 2.305-3.805.06-.265.103-.6.132-.985.204-2.684-2.298-4.838-5.264-4.838zM2.14 7.378C1.88 3.955 5.045 1.417 8.5 1.417c3.455 0 6.62 2.538 6.36 5.961a8.1 8.1 0 01-.154 1.13c-.36 1.607-1.454 3.105-2.56 4.284a21.608 21.608 0 01-2.904 2.55 1.261 1.261 0 01-1.484 0 21.606 21.606 0 01-2.903-2.55c-1.107-1.179-2.201-2.677-2.561-4.285a8.114 8.114 0 01-.154-1.129z'
						clipRule='evenodd'
					></path>
					<path
						fill='#0063A9'
						fillRule='evenodd'
						d='M8.5 6.656c-.506 0-.916.391-.916.873 0 .483.41.874.916.874s.916-.391.916-.874c0-.482-.41-.873-.916-.873zm-2.015.873c0-1.06.902-1.92 2.015-1.92s2.014.86 2.014 1.92c0 1.061-.901 1.921-2.014 1.921-1.113 0-2.015-.86-2.015-1.92z'
						clipRule='evenodd'
					></path>
				</svg>
				<p>{adress}</p>
			</div>
			<div className='flex justify-between'>
				<div className='flex gap-2 items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='17'
						height='17'
						viewBox='0 0 17 17'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.61808 4.95835C8.94408 4.95835 9.20835 5.20872 9.20835 5.51756L9.20835 9.24563C9.20835 9.39395 9.14616 9.53618 9.03546 9.64106L6.67435 11.8779C6.44383 12.0963 6.07009 12.0963 5.83957 11.8779C5.60906 11.6595 5.60906 11.3054 5.83958 11.0871L8.0278 9.014V5.51756C8.0278 5.20872 8.29208 4.95835 8.61808 4.95835Z'
							fill='#0063A9'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.50002 2.50643C6.96352 2.50643 4.86355 2.64744 3.55228 2.74902C3.12105 2.78243 2.78243 3.12105 2.74902 3.55228C2.64744 4.86355 2.50643 6.96352 2.50643 8.50002C2.50643 10.0365 2.64744 12.1365 2.74902 13.4478C2.78243 13.879 3.12105 14.2176 3.55228 14.251C4.86355 14.3526 6.96352 14.4936 8.50002 14.4936C10.0365 14.4936 12.1365 14.3526 13.4478 14.251C13.879 14.2176 14.2176 13.879 14.251 13.4478C14.3526 12.1365 14.4936 10.0365 14.4936 8.50002C14.4936 6.96352 14.3526 4.86355 14.251 3.55228C14.2176 3.12105 13.879 2.78243 13.4478 2.74902C12.1365 2.64744 10.0365 2.50643 8.50002 2.50643ZM3.46811 1.66254C4.77999 1.5609 6.91723 1.41669 8.50002 1.41669C10.0828 1.41669 12.2201 1.5609 13.5319 1.66254C14.4986 1.73743 15.2626 2.50144 15.3375 3.46811C15.4391 4.77999 15.5834 6.91723 15.5834 8.50002C15.5834 10.0828 15.4391 12.2201 15.3375 13.5319C15.2626 14.4986 14.4986 15.2626 13.5319 15.3375C12.2201 15.4391 10.0828 15.5834 8.50002 15.5834C6.91723 15.5834 4.77999 15.4391 3.46811 15.3375C2.50144 15.2626 1.73743 14.4986 1.66254 13.5319C1.5609 12.2201 1.41669 10.0828 1.41669 8.50002C1.41669 6.91723 1.5609 4.77999 1.66254 3.46811C1.73743 2.50144 2.50144 1.73743 3.46811 1.66254Z'
							fill='#0063A9'
						/>
					</svg>
					<p>{schedule}</p>
				</div>
				<div className='flex gap-2 items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='18'
						height='19'
						fill='none'
						viewBox='0 0 18 19'
					>
						<path
							stroke='#0063A9'
							strokeLinecap='round'
							d='M2.262 3.03L3.77 1.716a2 2 0 012.822.195l1.2 1.378a2 2 0 01.34 2.079l-.14.338a2 2 0 00.34 2.078l2.117 2.43a2 2 0 002.012.622l.354-.092a2 2 0 012.012.622l1.617 1.856a2 2 0 01-.195 2.821l-1.508 1.314a3 3 0 01-4.232-.292L1.97 7.262a3 3 0 01.292-4.232z'
						></path>
					</svg>
					<p>{phoneNumber}</p>
				</div>
			</div>
		</div>
	)
}

export default AdressCard
