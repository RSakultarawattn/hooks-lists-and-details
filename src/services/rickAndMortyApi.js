
export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((res) => res.results)
    .then((character) =>
      character.map(({ name, image, id }) => ({
        name, 
        image,
        id
      }))
    );
};

export const getCharacterById = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json());
};
