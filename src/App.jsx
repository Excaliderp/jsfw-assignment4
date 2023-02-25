import React, { useEffect, useState } from 'react'
import './App.css'
// import ArticleComponent from './Characters'

function App() {
  const [character, setCharacter] = useState([]);

  const fetchCharacter = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setCharacter(data))
  }

  useEffect(() => {
    fetchCharacter()

  }, [])
  console.log(character)
  return (
    <div className='App'>
      <h1>Disney</h1>
      {character.map((char, i) => (
        <div key={i}>
          <h2>{char.name}</h2>
          <p>{char.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App