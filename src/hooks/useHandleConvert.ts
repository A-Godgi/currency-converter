import React, { useEffect, useState } from 'react'
import { Currency, ExchangeRateRes } from '../types'
import BigNumber from 'bignumber.js'

interface Args {
	selectedCurrencies: Currency[]
	dataRates: ExchangeRateRes
}

export const useHandleConvert = ({ selectedCurrencies, dataRates }: Args) => {
	const [firstSelector, setFirstSelector] = useState<string>(
		selectedCurrencies[0].value,
	)

	const [secondSelector, setSecondSelector] = useState<string>(
		selectedCurrencies[1].value,
	)

	const [firstInput, setFirstInput] = useState<string>('1')

	const getResult = (first: string, second: string): string => {
		return new BigNumber(first).multipliedBy(new BigNumber(second)).toString()
	}

	const [secondInput, setSecondInput] = useState<string>(
		getResult(firstInput, dataRates[firstSelector][secondSelector].toString()),
	)

	const [currentEdit, setCurrentEdit] = useState<0 | 1>(0)

	const handleSelectorChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
		index: 0 | 1,
	) => {
		if (index === 0) {
			setFirstSelector(e.target.value)
		} else {
			setSecondSelector(e.target.value)
		}
		setCurrentEdit(index)
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: 0 | 1,
	) => {
		if (/^[0-9.]*$/.test(e.target.value)) {
			if (index === 0) {
				setFirstInput(e.target.value)
			} else {
				setSecondInput(e.target.value)
			}
			setCurrentEdit(index)
		}
	}

	useEffect(() => {
		if (!selectedCurrencies.some((i) => i.value === firstSelector)) {
			setFirstSelector(
				selectedCurrencies[0].value === secondSelector
					? selectedCurrencies[1].value
					: selectedCurrencies[0].value,
			)
		}

		if (!selectedCurrencies.some((i) => i.value === secondSelector)) {
			setSecondSelector(
				selectedCurrencies[0].value === firstSelector
					? selectedCurrencies[1].value
					: selectedCurrencies[0].value,
			)
		}
	}, [selectedCurrencies])

	useEffect(() => {
		if (currentEdit === 0) {
			setSecondInput(
				getResult(
					firstInput,
					dataRates[firstSelector][secondSelector].toString(),
				),
			)
		} else {
			setFirstInput(
				getResult(
					secondInput,
					dataRates[secondSelector][firstSelector].toString(),
				),
			)
		}
	}, [firstSelector, firstInput, secondSelector, secondInput])

	return {
		handleInputChange,
		handleSelectorChange,
		firstInput,
		firstSelector,
		secondInput,
		secondSelector,
	}
}
