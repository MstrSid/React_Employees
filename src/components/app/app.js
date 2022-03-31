import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
	const data = [
		{
			id: 1,
			name: 'John Smith',
			salary: 1000,
			currency: "USD"
		},
		{
			id: 2,
			name: 'Mike Andersen',
			salary: 1200,
			currency: "USD"
		},
		{
			id: 3,
			name: 'Kyle Nylson',
			salary: 1100,
			currency: "USD"
		},
	];
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>

	)
}

export default App;