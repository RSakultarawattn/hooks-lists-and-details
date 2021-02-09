import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../../services/rickAndMortyApi';
import CharacterList from './CharacterList';


const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  

    
  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
       
      });
  }, []);

  
  return <CharacterList characters={characters} />;

};

export default AllCharacters;
