import  React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';
import CharacterList from '../components/app/characters/CharacterList';

const DetailPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;

};

export default DetailPage;


    

        

// componentDidMount = async() => {
//     // eslint-disable-next-line max-len
//     const response = await fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`);
//     console.log(response)
//     this.setState({ character: response.body, Loading: false });
//   }
