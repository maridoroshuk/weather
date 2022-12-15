import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import ErrorBoundary from '@components/ErrorBoundary';

describe('render ErrorBoundary component', () => {
  it('should handle  ErrorBoundary component to be rendered', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      </ThemeProvider>,
    );
    const element = screen.getByTestId('errorBoundary');
    expect(element).toBeInTheDocument();
  });
});
