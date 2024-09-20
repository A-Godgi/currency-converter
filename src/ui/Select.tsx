import React from 'react'
import { Currency } from '../types'

interface Props {
	selectedCurrencies: Currency[]
	setSelectedCurrencies: React.Dispatch<React.SetStateAction<Currency[]>>
	currenciesList: Currency[]
}

const Select: React.FC<Props> = ({
	currenciesList,
	selectedCurrencies,
	setSelectedCurrencies,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const currency = currenciesList.find((i) => i.value === e.target.value)
		if (currency) {
			setSelectedCurrencies((prevState) => [...prevState, currency])
		}
	}

	return (
		<select
			className="select"
			onChange={handleChange}
			defaultValue={selectedCurrencies[0].value}
		>
			{currenciesList.map((currency: Currency) => (
				<option
					disabled={selectedCurrencies.some((i) => i.value === currency.value)}
					key={currency.value + currency.label}
					value={currency.value}
				>
					{currency.label}
				</option>
			))}
		</select>
	)
}

export default Select
