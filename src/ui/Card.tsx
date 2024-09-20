import React from 'react'

interface Props {
	label: string
	value: string
}

const Card: React.FC<Props> = ({ label, value }) => {
	return (
		<div className="card">
			<div className="bold">{label}</div>
			<div>{value}</div>
		</div>
	)
}

export default Card
