import './employees-list-item.scss'

const EmployeesListItem = (props) => {

	const {
		name,
		salary,
		currency,
		increase,
		rise,
		onDelete,
		onToggleProp
	} = props
	let classNames = "list-group-item d-flex justify-content-between";
	classNames = increase ? classNames += " increase" : classNames;
	classNames = rise ? classNames += " like" : classNames;

	return (
		<li className={classNames}>
			<span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
			<div className="list-group-item-money">
				<input type="text" className="list-group-item-input" defaultValue={salary} maxLength="8" />
				<div className="list-group-item-currency">{currency}</div>
			</div>
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm " onClick={onToggleProp} data-toggle="increase">
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm " onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)

}

export default EmployeesListItem;