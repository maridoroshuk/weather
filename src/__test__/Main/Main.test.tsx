import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import { Provider } from 'react-redux';
import store from '@store/store';
import Main from '@components/Main';
import { currentLocation } from '@mock/weather';

describe('render Main component', () => {
  it('should handle  Main component to be rendered', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Main currentLocation={currentLocation} />
        </ThemeProvider>
      </Provider>,
    );
    const element = screen.getByTestId('main');
    expect(element).toBeInTheDocument();
  });
});
