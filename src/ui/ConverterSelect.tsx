import React from 'react'
import { Currency } from '../types'

interface Props {
	value: string
	list: Currency[]
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const ConverterSelect: React.FC<Props> = ({ handleChange, list, value }) => {
	return (
		<select className="select" onChange={handleChange} defaultValue={value}>
			{list.map(({ label, value }: Currency) => (
				<option key={value + label} value={value}>
					{label}
				</option>
			))}
		</select>
	)
}

export default ConverterSelect
