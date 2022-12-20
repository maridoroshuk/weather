import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Home from '@components/Home';
import ErrorBoundary from '@components//ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { persistor } from '@store/store';
import { theme } from '@theme/index';
import Loader from './Loader';

function App() {
  return (
    <ErrorBoundary>
      <PersistGate
        persistor={persistor}
        loading={<Loader />}
      >
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </PersistGate>
    </ErrorBoundary>
  );
}

export default App;
