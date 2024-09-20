import React, { useState } from 'react'
import Select from '../ui/Select'
import { Currency } from '../types'
import EditableCard from '../ui/EditableCard'

interface Props {
	selectedCurrencies: Currency[]
	currenciesList: Currency[]
	handleSave: (selectedCurrencies: Currency[]) => void
}

const EditPanel: React.FC<Props> = ({
	selectedCurrencies,
	currenciesList,
	handleSave,
}) => {
	const [interimList, setInterimList] = useState<Currency[]>(selectedCurrencies)

	return (
		<div className="container">
			<div className="bage-panel">
				{interimList.map(({ value, label }) => (
					<EditableCard
						label={label}
						handleDelete={() =>
							setInterimList(interimList.filter((i) => i.value !== value))
						}
						key={value + label}
					/>
				))}
			</div>
			<div className="add-container">
				Add currency:
				<Select
					selectedCurrencies={interimList}
					setSelectedCurrencies={setInterimList}
					currenciesList={currenciesList}
				/>
				<button
					disabled={interimList.length < 2}
					className={'btn' + (interimList.length < 2 ? ' disable' : '')}
					onClick={() => handleSave(interimList)}
				>
					Save
				</button>
			</div>
		</div>
	)
}

export default EditPanel
