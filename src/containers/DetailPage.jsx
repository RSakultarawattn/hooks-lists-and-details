import  React, { Component, useState } from 'react';
import fetch from 'superagent';
import { getCharacters } from '../services/rickAndMortyApi';

const DetailPage = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getCharacters().then((character) => {
      setCharacter(character);
      setLoading(true);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <CharacterList character={character} />;

};

export default DetailPage;


    

        

// componentDidMount = async() => {
//     // eslint-disable-next-line max-len
//     const response = await fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`);
//     console.log(response)
//     this.setState({ character: response.body, Loading: false });
//   }
