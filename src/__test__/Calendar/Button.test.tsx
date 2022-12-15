import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/index';
import Button from '@components/Calendar/Button';

describe('render Button component', () => {
  it('should handle  Button component to be rendered', () => {
    const text = 'Login';
    const handleButtonClick = () => {};
    render(
      <ThemeProvider theme={theme}>
        <Button text={text} onClick={handleButtonClick} />
      </ThemeProvider>,
    );
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(text);
  });
});
