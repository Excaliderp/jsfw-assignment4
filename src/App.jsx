import { useEffect, useState } from 'react'
import './App.css'
import Characters from "./Characters"

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://api.disneyapi.dev/characters")
      .then((response) => {
        return response.json()
      })
      .then((datas) => {
        console.log(datas)
        setCharacters(datas)
      })
  }, [])

  return (
    <div className='App'>
      {
      characters.map((characters) => {
        return <Characters key={characters.id} {...characters}></Characters>
      })
    }
    </div>
  )
}

export default App
