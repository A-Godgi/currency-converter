import React, { useEffect, useState } from 'react'
import './assets/styles/main.scss'
import Layout from './ui/Layout'
import HomePage from './pages/HomePage'
import useFetch from './hooks/useFetch'
import { fetchAllExchangeRates, getCurrencies } from './services/api'
import { Currency, ExchangeRateRes } from './types'
import { getCurrenciesList } from './services/getCurrenciesList'
import { getSelectedCurrenciesFromStore } from './services/selectedCurrencies'
import ExchangeRate from './components/ExchangeRate'
import EditPanel from './components/EditPanel'
import { useHandleRequests } from './hooks/useHandleRequests'

function App() {
	const {
		selectedCurrencies,
		setSelectedCurrencies,
		isEditable,
		setIsEditable,
		isLoadingRates,
		dataRates,
		currenciesList,
	} = useHandleRequests()

	const handleEdit = () => {
		setIsEditable(true)
	}

	const handleSave = (interimList: Currency[]) => {
		setSelectedCurrencies(interimList)
		localStorage.setItem('selectedCurrencies', JSON.stringify(interimList))
		setIsEditable(false)
	}

	return (
		<Layout
			header={
				isEditable ? (
					<EditPanel
						selectedCurrencies={selectedCurrencies}
						handleSave={handleSave}
						currenciesList={currenciesList}
					/>
				) : isLoadingRates ? (
					'Loading...'
				) : (
					<ExchangeRate
						handleEdit={handleEdit}
						rates={dataRates}
						selectedCurrencies={selectedCurrencies}
					/>
				)
			}
		>
			<HomePage />
		</Layout>
	)
}

export default App
