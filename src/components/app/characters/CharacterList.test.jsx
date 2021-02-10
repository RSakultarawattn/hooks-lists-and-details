import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('Character item component', () => {
  afterEach(() => cleanup());
  it('renders a character', () => {
    const { asFragment } = render(<CharacterList
      characters={[]} 
    />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});