import React from 'react'
import { Currency, ExchangeRateRes } from '../types'
import { useHandleConvert } from '../hooks/useHandleConvert'
import ConverterElement from '../components/ConverterElement'

interface Props {
	selectedCurrencies: Currency[]
	dataRates: ExchangeRateRes
}

const Converter: React.FC<Props> = ({ selectedCurrencies, dataRates }) => {
	const {
		handleInputChange,
		handleSelectorChange,
		firstInput,
		firstSelector,
		secondInput,
		secondSelector,
	} = useHandleConvert({ selectedCurrencies, dataRates })

	return (
		<div>
			<h1 className="center m-12">Converter</h1>
			<div className="container center">
				<ConverterElement
					inputValue={firstInput}
					handleInputChange={(e) => handleInputChange(e, 0)}
					list={selectedCurrencies.filter((i) => i.value !== secondSelector)}
					selectValue={firstSelector}
					handleSelectChange={(e) => handleSelectorChange(e, 0)}
				/>
				<div className="bold m-12">=</div>
				<ConverterElement
					inputValue={secondInput}
					handleInputChange={(e) => handleInputChange(e, 1)}
					list={selectedCurrencies.filter((i) => i.value !== firstSelector)}
					selectValue={secondSelector}
					handleSelectChange={(e) => handleSelectorChange(e, 1)}
				/>
			</div>
		</div>
	)
}

export default Converter
