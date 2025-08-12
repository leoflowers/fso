import { useState } from 'react'

/// PersonForm: adds a new person to phone book
const PersonForm = (props) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const resetForm = () => {
    setName('')
    setNumber('')
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  // Add new person object to `persons` array
  const addPerson = (event) => {
    event.preventDefault()

    if (props.persons.find((person) => person.name === name)) {
      alert(`${name} is already in phonebook`)
      resetForm()
      return
    }

    props.setPersons(props.persons.concat({
      name: name,
      number: number,
    }))

    resetForm()
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={name}
            onChange={handleNameChange} />
        </div>

        <div>
          number: <input
            value={number}
            onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm