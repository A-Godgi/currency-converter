import React from 'react'

interface Props {
	header: React.ReactNode
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, header }) => {
	return (
		<div className="layout">
			<div className="header">
				<div className="content">{header}</div>
			</div>
			<div className="content">{children}</div>
		</div>
	)
}

export default Layout
