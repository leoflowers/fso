import personsService from '../services/persons'

const Person = ({ info, persons, setPersons }) => {
  const handleDelete = () => {
    personsService.remove(info.id).then(() => {
      const newPersons = persons.filter(person => person.id !== info.id);
      setPersons(newPersons);
    })
  };

  return (
    <div>
      <div>
        {info.name} {info.number} <button type="submit" onClick={handleDelete}>delete</button>
      </div>
    </div>
  )
}

const Persons = ({ persons, setPersons }) => {
  return (
    persons.map(person =>
      <Person
        key={person.id}
        info={person}
        persons={persons}
        setPersons={setPersons} />)
  )
}

export default Persons
