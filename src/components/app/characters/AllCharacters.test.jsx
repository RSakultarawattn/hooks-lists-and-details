import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characters from '../../fixtures/CharactersById.json';
import AllCharacters from './AllCharacters';

const server = setupServer (
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(characters));
  })
);

describe('CharacterById container', () => {
  act(async() => {beforeAll(() => server.listen());
    afterAll(() => server.close());
  });

  it('fetches and displays all characters details', async() => {
    await act(async() => {
      render(
        <MemoryRouter>
          <AllCharacters match={{ params: { id: '2' } }} />
        </MemoryRouter>);

    });

    

    
    
    
    return waitFor(() => {
      screen.getByText('Morty Smith');
      
    });
  });
});
