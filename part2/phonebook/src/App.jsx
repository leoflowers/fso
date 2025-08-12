import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  // Existing contacts
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response => {
      setPersons(response.data)
    }))
  })

  // Filtering information
  const [nameFilter, setNameFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />

      <h3>Add a new contact</h3>
      <PersonForm 
        persons={persons} 
        setPersons={setPersons}
      />

      <h3>Numbers</h3>
      <Persons 
        persons={persons.filter((person) => person.name.includes(nameFilter))}
      />
    </div>
  )
}

export default App