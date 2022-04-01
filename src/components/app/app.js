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
					increase: false,
					rise: false,
					name: 'John Smith',
					salary: 1000,
					currency: "USD"
				},
				{
					id: 2,
					increase: false,
					rise: false,
					name: 'Mike Andersen',
					salary: 1200,
					currency: "USD"
				},
				{
					id: 3,
					increase: false,
					rise: false,
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

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			})
		}))
	}

	render() {
		const { data } = this.state;
		const empl = data.length;
		const increased = data.filter(item => item.increase).length
		return (
			<div className="app">
				<AppInfo
					countEmployees={empl}
					countRiseEmployees={increased} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>

		)
	}

}

export default App;