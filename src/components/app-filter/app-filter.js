import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотродники' },
    { name: 'rise', label: 'Hа повышение' },
    { name: 'salaryMore1000', label: 'З/П больше 1000$' }
  ]

  const buttonsArr = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttonsArr}
    </div>
  )
}

export default AppFilter;