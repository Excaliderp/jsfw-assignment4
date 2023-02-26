import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [character, setCharacter] = useState([]);

  const steamLink = "https://store.steampowered.com/app/"

  const fetchCharacter = () => {
    return fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
      .then((response) => response.json())
      .then((data) => setCharacter(data))
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  console.log(character)

  return (
    <div className='App'>
      <h1>Steam games under €5</h1>
      {character.map((char, id) => (
        <div className='gameCard' key={id}>
          <h2 className='gameTitle'>{char.title}</h2>
          <img src={char.thumb} />
          <p className='price'>€ {char.salePrice}</p>
          <a href={"https://store.steampowered.com/app/" + char.steamAppID} target="_blank">Link to Store Page</a>
        </div>
      ))}
    </div>
  );
}

export default App