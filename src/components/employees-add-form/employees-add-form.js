import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			currency: 'USD'
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		const { onAdd } = this.props;
		const { name, salary, currency } = this.state;
		e.preventDefault();
		onAdd(name, salary, currency);
		this.setState({
			name: '',
			salary: '',
			currency: 'USD'
		})
	}

	render() {
		const { name, salary, currency } = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text" name='name'
						className="form-control new-post-label"
						placeholder="Как его зовут?" onChange={this.onValueChange} value={name} />
					<input type="number" name='salary'
						className="form-control new-post-label"
						placeholder="З/П?" onChange={this.onValueChange} value={salary} />
					<select name='currency'
						className="form-control new-post-label currecy-dropdown" onChange={this.onValueChange} value={currency}>
						<option value={"USD"}>USD</option>
						<option value={"EUR"}>EUR</option>
						<option value={"CHN"}>CHN</option>
					</select>
					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;