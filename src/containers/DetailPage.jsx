import  React, { useEffect, useState } from 'react';
import { getCharacterById } from '../services/rickAndMortyApi';
import Character from '../components/app/characters/Character';


const DetailPage = ({ match }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);



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


    

        

// componentDidMount = async() => {
//     // eslint-disable-next-line max-len
//     const response = await fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`);
//     console.log(response)
//     this.setState({ character: response.body, Loading: false });
//   }
