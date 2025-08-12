const Person = ({ info }) => {
  return <p>{info.name} {info.number}</p>
}

const Persons = ({ persons }) => {
  return (
    persons.map(person => <Person key={person.id} info={person} />)
  )
}

export default Persons