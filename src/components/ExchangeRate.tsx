import React from 'react'
import { Currency, ExchangeRateRes } from '../types'

import { baseCurrency } from '../constants'
import Card from '../ui/Card'

interface Props {
	rates: ExchangeRateRes | null
	selectedCurrencies: Currency[]
	handleEdit: () => void
}

const ExchangeRate: React.FC<Props> = ({
	rates,
	selectedCurrencies,
	handleEdit,
}) => {
	const getPrice = (value: string) =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: baseCurrency.toUpperCase(),
			currencyDisplay: 'narrowSymbol',
		}).format(rates && `${value}` in rates ? rates[value][baseCurrency] : 0)

	return (
		<div className="container">
			<div className="bage-panel">
				{rates &&
					selectedCurrencies
						.filter((i) => i.value !== baseCurrency)
						.map(({ label, value }) => (
							<Card label={label} value={getPrice(value)} key={value + label} />
						))}
			</div>
			<div className="add-container">
				<button onClick={handleEdit} className="btn">
					Edit
				</button>
			</div>
		</div>
	)
}

export default ExchangeRate
