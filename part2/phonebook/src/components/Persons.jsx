const Person = ({ info }) => {
  return (
    <div>
      <div>
        {info.name} {info.number} <button type="submit">add</button>
      </div>
    </div>
  )
}

const Persons = ({ persons }) => {
  return (
    persons.map(person => <Person key={person.id} info={person} />)
  )
}

export default Persons