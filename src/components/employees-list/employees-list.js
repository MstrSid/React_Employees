import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data }) => {
	const listItems = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem key={id} {...itemProps} />
		)
	});
	return (
		<ul className="app-list list-group">
			{listItems}
		</ul>
	)
}

export default EmployeesList;