import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import Forecast from '@components/Weather/Forecast';
import { forecast } from '@mock/weather';

describe('render Hourly component', () => {
  it('should handle  Hourly component to be rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <Forecast forecast={forecast} />
      </ThemeProvider>,
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
