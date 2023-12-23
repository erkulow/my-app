import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState<number>(0)

	const handleIncrement = () => {
		setCount(count + 1)
	}
	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	return (
		<div className='w-full flex justify-between items-center'>
			<span
				className='p-2 bg-gray-200 rounded-full flex items-center justify-center h-[30px] w-[30px] cursor-pointer'
				onClick={handleDecrement}
			>
				-
			</span>
			<p>{count}</p>
			<span
				className='p-2 bg-gray-200 rounded-full flex items-center justify-center h-[30px] w-[30px] cursor-pointer'
				onClick={handleIncrement}
			>
				+
			</span>
		</div>
	)
}

export default Counter
