import { useEffect, useState } from 'react'
import './App.css'
import Characters from "./Characters"

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    Characters(`      
    {
      characters(page: 5) {
      items {
        _id
        name
        imageUrl
        films
        tvShows
      }
    `) .then((response) => {
      return response.json()
    })
      .then((response) => {
        console.log(data)
        setCharacters(data)
      })
  }, [])

  return (
    <div className='App'>
      {
        Characters.map((characters) => {
          return <Characters key={characters.id} {...characters}></Characters>
        })
      }
    </div>
  )
}

export default App
