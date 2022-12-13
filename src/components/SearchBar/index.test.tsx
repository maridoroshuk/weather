import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import SearchBar from './index';

const onSearchChange = () => {};
const currentLocation = {
  lat: 53.89,
  lon: 27.56,
  currentCity: 'Minsk, BY',
};

describe('SearchBar component', () => {
  it('SearchBar renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchBar
          onSearchChange={onSearchChange}
          currentLocation={currentLocation}
        />
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('search').toBeInTheDocument();
  });
});
