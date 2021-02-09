import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage container', () => {
  it('displays a chosen character', async () => {
    render(<DetailPage match={{ params: { character: 'Morty' } }} />);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});