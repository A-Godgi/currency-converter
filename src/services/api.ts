import { Currency, CurrencyRes, ExchangeRateRes } from '../types'

const request = <T>(url: string): Promise<T> =>
	fetch(url).then((response) => response.json())

export const getCurrencies = () =>
	request<CurrencyRes>(
		'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json',
	)
export const getExchangeRate = (currency: string) =>
	request<ExchangeRateRes>(
		`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
	)

export const fetchAllExchangeRates = async (
	currenciesList: Currency[],
): Promise<ExchangeRateRes | {}> => {
	const exchangeRatePromises = currenciesList.map((currency) =>
		getExchangeRate(currency.value),
	)
	const exchangeRatesArray = await Promise.all(exchangeRatePromises)
	return exchangeRatesArray.reduce((acc, exchangeRate, index) => {
		acc[currenciesList[index].value] = exchangeRate[currenciesList[index].value]
		return acc
	}, {})
}
