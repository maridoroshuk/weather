import React from 'react';
import '@testing-library/jest-dom';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import { Provider } from 'react-redux';
import store from '@store/store';
import SearchBar from '@components/SearchBar';
import { IOptions } from '@customTypes/weather';
import { currentLocation } from '@mock/weather';
import { SingleValue } from 'react-select';

describe('render SearchBar component', () => {
  let handleSearchChange: (
    input: SingleValue<IOptions>,
  ) => void;
  beforeEach(() => {
    handleSearchChange = (input: SingleValue<IOptions>) =>
      fireEvent.change(screen.getByText(input!.label));
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchBar
            onSearchChange={handleSearchChange}
            currentLocation={currentLocation}
          />
        </ThemeProvider>
      </Provider>,
    );
  });
  describe('when user typed', () => {
    const userInput = 'Minsk, BY';
    beforeEach(() => {
      handleSearchChange({
        value: '27.5618225 53.9024716',
        label: userInput,
      });
    });
    it('should render and input text', async () => {
      const element = screen.queryByText(userInput);
      await waitFor(() =>
        expect(element).toBeInTheDocument());
    });
  });
});
