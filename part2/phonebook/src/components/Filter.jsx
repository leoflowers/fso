const Filter = (props) => {
  const handleNameFilterChange = (event) => {
    props.setNameFilter(event.target.value)
  }

  return (
    <form>
      <div>
        Filter by name: <input
          value={props.nameFilter}
          onChange={handleNameFilterChange} />
      </div>
    </form>
  )
}

export default Filter