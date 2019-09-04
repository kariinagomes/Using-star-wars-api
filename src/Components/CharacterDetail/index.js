import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getHomeworld } from '../../API/Characters';
import './characterDetail.css';

const CharacterDetail = ({ character }) => {
  const [homeworld, setHomeworld] = useState();

  useEffect(() => {
    character && (
      getHomeworld(character.homeworld).then(( data ) => { setHomeworld(data.name) })
    ) 
  }, [character]); 

  return character ? (
    <div className="details">
      <h6>{character.name}</h6>
      <p><b>Height: </b>{character.height}</p>
      <p><b>Mass: </b>{character.mass}</p>
      <p><b>Hair color: </b>{character.hair_color}</p>
      <p><b>Eye color: </b>{character.eye_color}</p>
      <p><b>Birth year: </b>{character.birth_year}</p>
      <p><b>Gender: </b>{character.gender}</p>
      <p><b>Homeworld: </b>{homeworld}</p>

    </div>
  ) : <div>Character not found</div>
}

export default withRouter(CharacterDetail);