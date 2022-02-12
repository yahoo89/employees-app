import './app-info.css';

const AppInfo = ({ employeesCount, increasedCount }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании MTL</h1>
      <h2>Общее число сотрудников: {employeesCount} человек</h2>
      <h2>Премию получат: {increasedCount} человек</h2>
    </div>
  )
};

export default AppInfo;
