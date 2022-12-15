import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import Hourly from '@components/Weather/CurrentWeather/Hourly';
import { hourly } from '@mock/weather';

describe('render Hourly component', () => {
  it('should handle  Hourly component to be rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <Hourly hourlyList={hourly} />
      </ThemeProvider>,
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
