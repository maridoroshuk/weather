import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Home from '@components/Home';
import { ThemeProvider } from 'styled-components';
import { persistor } from '@store/store';
import { theme } from '@theme/index';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </PersistGate>
    </ErrorBoundary>
  );
}

export default App;
