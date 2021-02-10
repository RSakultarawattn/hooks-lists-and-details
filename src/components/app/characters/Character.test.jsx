import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('displays a character', () => {
  afterEach(() => cleanup());
  it('renders one single character', () => {
    const { asFragment } = render(<Character image="" name="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
