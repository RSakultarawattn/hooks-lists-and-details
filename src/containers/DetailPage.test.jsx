import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import character from '../components/fixtures/CharactersById.json';
import DetailPage from './DetailPage';

const server = setupServer (
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(character));
  })
);

describe('CharacterById container', () => {
  act(async() => {beforeAll(() => server.listen());
    afterAll(() => server.close());
  });

  it('fetches and displays a characters details', async() => {
    await act(async() => {
      render(
        <MemoryRouter>
          <DetailPage match={{ params: { id: '2' } }} />
        </MemoryRouter>);

    });

    

    screen.getByText('Loading');

    
    
    return waitFor(() => {
      screen.getByText('Morty Smith');
      
    });
  });
});
