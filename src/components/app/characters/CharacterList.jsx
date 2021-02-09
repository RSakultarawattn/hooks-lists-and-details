import React from 'react';
import propTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';


const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => ( 
    <>
      <Link to={`/DetailPage/${character.id}`}>
        <li key={character.id}>
          <Character {...character} />
        </li>
      </Link>
    </>
  ));
  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};
CharacterList.propTypes = {
  characters: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  })).isRequired
};
export default CharacterList;
