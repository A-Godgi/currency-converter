import React from 'react'
import './assets/styles/main.scss'
import Layout from './ui/Layout'
import Converter from './pages/Converter'
import { Currency } from './types'
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
					<div className="loader">Loading...</div>
				) : (
					<ExchangeRate
						handleEdit={handleEdit}
						rates={dataRates}
						selectedCurrencies={selectedCurrencies}
					/>
				)
			}
		>
			{!isLoadingRates && dataRates && (
				<Converter
					dataRates={dataRates}
					selectedCurrencies={selectedCurrencies}
				/>
			)}
		</Layout>
	)
}

export default App
