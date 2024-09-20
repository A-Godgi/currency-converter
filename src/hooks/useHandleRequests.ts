import useFetch from './useFetch'
import { fetchAllExchangeRates, getCurrencies } from '../services/api'
import { useEffect, useState } from 'react'
import { Currency } from '../types'
import { getSelectedCurrenciesFromStorage } from '../services/getSelectedCurrenciesFromStorage'
import { getCurrenciesList } from '../services/getCurrenciesList'

export const useHandleRequests = () => {
	//States
	const [isEditable, setIsEditable] = useState(
		!localStorage.getItem('selectedCurrencies'),
	)
	const [currenciesList, setCurrenciesList] = useState<Currency[]>([])
	const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>(
		getSelectedCurrenciesFromStorage(),
	)

	//API
	const [
		fetchCurrencies,
		{ data: currenciesData, isSuccess: isSuccessCurrencies },
	] = useFetch(getCurrencies)
	const [
		fetchRates,
		{ data: dataRates, isSuccess: isSuccessRates, isLoading: isLoadingRates },
	] = useFetch(() => fetchAllExchangeRates(selectedCurrencies))

	useEffect(() => {
		fetchCurrencies()
	}, [])

	useEffect(() => {
		if (isSuccessCurrencies && currenciesData) {
			setCurrenciesList(getCurrenciesList(currenciesData))
		}
	}, [isSuccessCurrencies])

	useEffect(() => {
		fetchRates()
	}, [selectedCurrencies])

	return {
		setIsEditable,
		setSelectedCurrencies,
		isEditable,
		isLoadingRates,
		dataRates,
		selectedCurrencies,
		currenciesList,
	}
}
