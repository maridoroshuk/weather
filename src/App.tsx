import React from 'react';
import Home from '@components/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      >
        <Home />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
