import React, { useEffect, useState } from 'react'
import './App.css'
import "./fonts/"

function App() {
  const [character, setCharacter] = useState([]);


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
      <main>
        <section className='left-container'>
          <img className="icon" src="./images/Logo.png" />
          <img className="title" src="./images/Title.png" />
          <div className='credit'>
            <p>Credit:</p>
          <a href='https://www.figma.com/community/file/1022881814667061459' target="_blank">Design</a>
          <a href='https://creativecommons.org/licenses/by/4.0/' target="_blank"> License</a><br />
          <a href='https://apidocs.cheapshark.com/' target="_blank">API</a>
          </div>
        </section>

        <section className='list-container'>
          {character.map((char, id) => (
            <div className='gameCard' key={id}>
              <div className='text-content'>
                <h2 className='gameTitle'>{char.title}</h2>
                <p className='game-price'>$ {char.salePrice}</p>
                <a href={"https://www.cheapshark.com/redirect?dealID=" + char.dealID} target="_blank">Link to Store Page</a>
              </div>
              <img src={char.thumb} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App