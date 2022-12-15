import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import TimeCity from '@components/TimeCity';
import { theme } from '@theme/index';
import store from '@store/store';

describe('render TimeCity component', () => {
  it('should handle  TimeCity component to be rendered', () => {
    const defaultCity = 'Minsk, BY';
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TimeCity defaultCity={defaultCity} />
        </ThemeProvider>
      </Provider>,
    );
    const element = screen.getByTestId('timeCity');
    expect(element).toBeInTheDocument();
  });
});
