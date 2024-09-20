import React from 'react'
import ConverterSelect from '../ui/ConverterSelect'
import { Currency } from '../types'

interface Props {
	inputValue: string
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	list: Currency[]
	selectValue: string
	handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const ConverterElement: React.FC<Props> = ({
	inputValue,
	handleInputChange,
	list,
	selectValue,
	handleSelectChange,
}) => {
	return (
		<div className="column-container">
			<input
				value={inputValue}
				onChange={handleInputChange}
				className="input"
			/>
			<ConverterSelect
				value={selectValue}
				list={list}
				handleChange={handleSelectChange}
			/>
		</div>
	)
}

export default ConverterElement
