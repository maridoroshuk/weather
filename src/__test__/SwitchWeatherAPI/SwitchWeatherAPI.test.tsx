import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '@store/store';
import SwitchWeatherAPI from '@components/SwitchWeatherAPI';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import userEvent from '@testing-library/user-event';
import { currentLocation } from '@mock/weather';

describe('render SwitchWeatherAPI component', () => {
  const openWeatherLabel = 'openWeather';
  const weatherBitLabel = 'weatherBit';
  let handleAPIChange: (button: string) => void;

  beforeEach(() => {
    handleAPIChange = (button: string) => userEvent.click(screen.getByTestId(button));
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SwitchWeatherAPI
            currentLocation={currentLocation}
          />
        </ThemeProvider>
      </Provider>,
    );
  });

  it('should handle  SwitchWeatherAPI component to be rendered', () => {
    const weatherBitElement = screen.queryByTestId(weatherBitLabel);
    const openWeatherElement = screen.queryByTestId(
      openWeatherLabel,
    );
    expect(weatherBitElement).toBeInTheDocument();
    expect(openWeatherElement).toBeInTheDocument();
  });
  describe('when OpenWeather button is clicked', () => {
    beforeEach(() => {
      handleAPIChange(openWeatherLabel);
    });
    it('should handle OpenWeather button being checked and WeatherBit button not be cheked ', async () => {
      const weatherBitElement = screen.queryByTestId(weatherBitLabel);
      const openWeatherElement = screen.queryByTestId(
        openWeatherLabel,
      );
      await waitFor(() => expect(weatherBitElement).not.toBeChecked());
      await waitFor(() => expect(openWeatherElement).toBeChecked());
    });
  });

  describe('when WeatherBit button is clicked', () => {
    beforeEach(() => {
      handleAPIChange(weatherBitLabel);
    });
    it('should handle OpenWeather button being checked and WeatherBit button not be cheked ', async () => {
      const weatherBitElement = screen.queryByTestId(weatherBitLabel);
      const openWeatherElement = screen.queryByTestId(
        openWeatherLabel,
      );
      await waitFor(() => expect(weatherBitElement).toBeChecked());
      await waitFor(() => expect(openWeatherElement).not.toBeChecked());
    });
  });
});
