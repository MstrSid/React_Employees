import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [
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
			]
		}
		this.maxId = 3;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(elem => elem.id !== id)
			}

		})
	}

	addItem = (name, salary, currency) => {
		this.setState(({ data }) => {
			return {
				data: data.concat({ name: name, salary: salary, currency: currency, id: this.maxId })
			}
		})
		this.maxId++;
	}



	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={data}
					onDelete={this.deleteItem} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>

		)
	}

}

export default App;