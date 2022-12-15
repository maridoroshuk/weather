import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Time from '@components/TimeCity/Time';
import { theme } from '@theme/index';
import { getDate, getTime } from '@utils/date';

describe('render Time component', () => {
  it('should handle  Time component to be rendered', () => {
    const time = getTime(new Date());
    const day = getDate(new Date());
    render(
      <ThemeProvider theme={theme}>
        <Time time={time} day={day} />
      </ThemeProvider>,
    );
    const elementTime = screen.getByTestId('time');
    const elementDay = screen.getByTestId('day');
    expect(elementTime).toBeInTheDocument();
    expect(elementDay).toBeInTheDocument();
    expect(elementTime).toHaveTextContent(time);
    expect(elementDay).toHaveTextContent(day);
  });
});
