import { Currency, CurrencyRes } from '../types'

export const getCurrenciesList = (data: CurrencyRes): Currency[] => {
	const clearedFromEmpty = Object.entries(data).filter(
		([_, label]) => label.trim() !== '',
	)

	const list = clearedFromEmpty.map(([value, label]) => ({ value, label }))

	return list.filter(
		((item) => {
			const labels = new Set<string>()
			return (item: { value: string; label: string }) => {
				if (labels.has(item.label)) {
					return false
				}
				labels.add(item.label)
				return true
			}
		})(),
	)
}
