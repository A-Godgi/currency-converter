export interface FetchState<T> {
	data: T | null
	isLoading: boolean
	isError: boolean
	isSuccess: boolean
}

export interface CurrencyRes {
	[key: string]: string
}

export interface ExchangeRateRes {
	[key: string]: {
		[currency: string]: number
	}
}

export interface Currency {
	value: string
	label: string
}
