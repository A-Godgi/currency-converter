import { Currency } from '../types'

export const getSelectedCurrenciesFromStore = (): Currency[] => {
	const selectedCurrencies = localStorage.getItem('selectedCurrencies')
	const defaultCurrencies = [
		{ value: 'uah', label: 'Ukrainian Hryvnia' },
		{ value: 'usd', label: 'US Dollar' },
		{ value: 'eur', label: 'Euro' },
	]
	return selectedCurrencies ? JSON.parse(selectedCurrencies) : defaultCurrencies
}