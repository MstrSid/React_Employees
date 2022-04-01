import './app-info.css';

const AppInfo = ({ countEmployees, countRiseEmployees }) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников компании</h1>
			<h2>Общее число сотрудников: {countEmployees}</h2>
			<h2>Премию получат: {countRiseEmployees}</h2>
		</div>
	)
}

export default AppInfo;