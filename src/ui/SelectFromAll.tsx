import React from 'react'
import { Currency } from '../types'
import { baseCurrency } from '../constants'

interface Props {
	selectedCurrencies: Currency[]
	setSelectedCurrencies: React.Dispatch<React.SetStateAction<Currency[]>>
	currenciesList: Currency[]
}

const SelectFromAll: React.FC<Props> = ({
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
		currenciesList.length ? (
			<select
				className="select"
				onChange={handleChange}
				defaultValue={
					selectedCurrencies.length ? selectedCurrencies[0].value : baseCurrency
				}
			>
				{currenciesList.map((currency: Currency) => (
					<option
						disabled={selectedCurrencies.some(
							(i) => i.value === currency.value,
						)}
						key={currency.value + currency.label}
						value={currency.value}
					>
						{currency.label}
					</option>
				))}
			</select>
		) : null
	)
}

export default SelectFromAll
