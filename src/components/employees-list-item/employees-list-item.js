import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			rise: false
		}
	}

	onIncreace = () => {
		this.setState(({ increase }) => ({
			increase: !increase
		}))
	}

	onRise = () => {
		this.setState(({ rise }) => ({
			rise: !rise
		}))
	}

	render() {
		const { name, salary, currency } = this.props
		const { increase, rise } = this.state
		let classNames = "list-group-item d-flex justify-content-between";
		classNames = increase ? classNames += " increase" : classNames;
		classNames = rise ? classNames += " like" : classNames;

		return (
			<li className={classNames}>
				<span className="list-group-item-label" onClick={this.onRise}>{name}</span>
				<div className="list-group-item-money">
					<input type="text" className="list-group-item-input" defaultValue={salary} maxLength="8" />
					<div className="list-group-item-currency">{currency}</div>
				</div>
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm " onClick={this.onIncreace}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;