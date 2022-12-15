import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import Daily from '@components/Weather/CurrentWeather/Daily';

describe('render Daily component', () => {
  it('should handle  Daily component to be rendered', () => {
    const temp = 7.85;
    const icon = '04d';
    render(
      <ThemeProvider theme={theme}>
        <Daily temp={temp} icon={icon} />
      </ThemeProvider>,
    );
    const elementTemp = screen.getByTestId('dailyTemp');
    const elementImage = screen.getByTestId('dailyImage');
    expect(elementTemp).toBeInTheDocument();
    expect(elementTemp).toHaveTextContent(`${Math.round(temp)}°C`);
    expect(elementImage).toBeInTheDocument();
  });
});
