import React from 'react';
import { Link } from 'react-router-dom';
import './characterItem.css';

const CharacterItem = ({ character }) => {
  return (
    <div className="character-item">  
      <div className="character-header">
        <h6>{character.name}</h6>
        <div className="more-details">
          <Link to={`/people/${character.id}`}>
            <span>+</span>
          </Link>
        </div>
      </div>      
      <p><b>Height: </b>{character.height}</p>
      <p><b>Mass: </b>{character.mass}</p>
      <p><b>Hair color: </b>{character.hair_color}</p>
      <p><b>Eye color: </b>{character.eye_color}</p>
      <p><b>Birth year: </b>{character.birth_year}</p>
      <p><b>Gender: </b>{character.gender}</p>
      {/* <p><b>Homeworld: </b>{character.homeworld}</p> */}
      
    </div>
  )
}

export default CharacterItem;