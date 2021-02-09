
export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((character) =>
      character.map(({ name, image }) => ({
        name, 
        image
      }))
    );
};


