import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero  from '../Components/Header/Hero';
import CharacterDetail from '../Components/CharacterDetail'
import Body from '../Components/Body';
import { getCharacterById } from '../API/Characters';
// import { characters } from '../mock';

const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // const filtered = characters.filter((character) => character.url.substr(-2, 1) === (match.params.id))[0]
    // setCharacter(filtered);
    getCharacterById(match.params.id).then(({ data }) => {
      setCharacter(data)
    })
  }, [match.params.id]);

  return (
    <div>
      {/* <header> */}
        <Header />
        <Hero />
      {/* </header>
      <body> */}
      <Body> 
        <CharacterDetail character={character} />
      </Body>
      {/* </body> */}
    </div>
  )

}

export default CharacterView;