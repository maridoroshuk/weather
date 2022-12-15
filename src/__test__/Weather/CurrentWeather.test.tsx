import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import CurrentWeather from '@components/Weather/CurrentWeather';
import store from '@store/store';

describe('render CurrentWeather component', () => {
  it('should handle  CurrentWeather component to be rendered', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CurrentWeather />
        </ThemeProvider>
      </Provider>,
    );
    const element = screen.getByTestId('currentWeather');
    expect(element).toBeInTheDocument();
  });
});
