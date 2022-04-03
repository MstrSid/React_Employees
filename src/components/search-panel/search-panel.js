import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTermLocal: ''
		}
	}

	onUpdateSearchLocal = (e) => {
		const searchTermLocal = e.target.value;
		this.setState({ searchTermLocal: searchTermLocal });
		this.props.onUpdateSearch(searchTermLocal);
	}

	render() {
		return (
			<input type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={this.state.searchTermLocal}
				onChange={this.onUpdateSearchLocal} />
		)
	}
}

export default SearchPanel;