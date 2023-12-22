import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface SearchInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

const SearchInput = (props: SearchInputProps): JSX.Element => {
	return (
		<div className='form-control w-full border rounded-[1000px] p-1 bg-white'>
			<div className='input-group w-full flex px-4 items-center  '>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='19'
					height='18'
					fill='none'
					viewBox='0 0 19 18'
				>
					<circle
						cx='9.776'
						cy='8.825'
						r='6.741'
						stroke='#949494'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
					></circle>
					<path
						stroke='#949494'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M14.464 13.864l2.644 2.636'
					></path>
				</svg>
				<input
					onChange={props.onChange}
					value={props.value}
					type='text'
					placeholder={props.placeholder}
					className='input w-full input-sm !outline-none border-none'
				/>
			</div>
		</div>
	)
}

export default SearchInput
