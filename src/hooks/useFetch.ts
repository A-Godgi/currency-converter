import { useState, useCallback } from 'react'
import { FetchState } from '../types'

const useFetch = <T>(
	request: () => Promise<T>,
): [() => Promise<void>, FetchState<T>] => {
	const [fetchState, setFetchState] = useState<FetchState<T>>({
		data: null,
		isLoading: false,
		isError: false,
		isSuccess: false,
	})

	const fetch = useCallback(async () => {
		setFetchState((prevState) => ({
			data: prevState.data,
			isLoading: true,
			isError: prevState.isError,
			isSuccess: prevState.isSuccess,
		}))

		try {
			const result = await request()
			setFetchState((prevState) => ({
				data: result,
				isLoading: false,
				isError: false,
				isSuccess: true,
			}))
		} catch (error) {
			console.error(error)
			setFetchState((prevState) => ({
				data: prevState.data,
				isLoading: false,
				isError: true,
				isSuccess: false,
			}))
		}
	}, [request])

	return [fetch, fetchState]
}

export default useFetch
