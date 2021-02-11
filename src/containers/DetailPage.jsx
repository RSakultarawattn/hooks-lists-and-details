import  React, { useEffect, useState } from 'react';
import { getCharacterById } from '../services/rickAndMortyApi';
import Character from '../components/app/characters/Character';


const DetailPage = ({ match }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    getCharacterById(match.params.id)
      .then((character) => {
        setCharacter(character);
        setLoading(false);
      });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <Character {...character} />;

};

export default DetailPage;


    

        


