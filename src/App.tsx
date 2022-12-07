import React from 'react';
import Home from '@components/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
