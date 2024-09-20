import React from 'react'

interface Props {
	label: string
	handleDelete: () => void
}

const EditableCard: React.FC<Props> = ({ label, handleDelete }) => {
	return (
		<div className="card">
			<span className="bold">{label}</span>
			<button className="btn danger" onClick={handleDelete}>
				Delete
			</button>
		</div>
	)
}

export default EditableCard
