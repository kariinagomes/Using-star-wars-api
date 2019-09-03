import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import Body from '../Components/Body';
import CharacterItem from '../Components/CharacterItem';
//import { characters } from '../mock';
import { getCharacters } from '../API/Characters';
import './main.css';

const Main = () => {
  // usando hooks
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    getCharacters().then(({ data: { results } }) => { 
      setCharacter(results);
    }).catch((error) => {
      console.log(error)
    })
  }, []); 

  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <body>
        <Body> 
            <div className="character-container">
                {
                  characters.map(character => <CharacterItem character={character} key={character.id} />)
                }
            </div>         
        </Body>      
      </body>
    </>   
  )
}

export default Main;