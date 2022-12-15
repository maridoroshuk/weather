import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import Events from '@components/Calendar/Events';
import { events } from '@mock/calendar';

describe('render Events component', () => {
  it('should handle  Events component to be rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <Events events={events} />
      </ThemeProvider>,
    );

    const element = screen.getByText(events[0].summary);
    expect(element).toBeInTheDocument();
  });
});
