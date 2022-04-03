import './app-filter.scss';

const AppFilter = (props) => {
	const buttonData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rise', label: 'На повышение' },
		{ name: 'reach', label: `ЗП > 1000$` }
	];

	const buttons = buttonData.map(({ name, label }) => {
		const active = props.filter === name;
		const btnClass = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button
				className={`btn ${btnClass}`} 
				type="button" 
				key={name}
				onClick={() => props.onFilter(name)}>
					{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
		</div>
	)

}

export default AppFilter;