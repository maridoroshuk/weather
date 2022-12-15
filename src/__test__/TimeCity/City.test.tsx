import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import City from '@components/TimeCity/City';
import { theme } from '@theme/index';

describe('render City component', () => {
  it('should handle  City component to be rendered', () => {
    const city = 'Minsk, BY';
    render(
      <ThemeProvider theme={theme}>
        <City city={city} />
      </ThemeProvider>,
    );
    const element = screen.getByTestId('city');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(city);
  });
});
