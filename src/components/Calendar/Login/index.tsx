import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface ILoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: ILoginProps) {
  return (
    <button type="button" onClick={onLogin}>
      Sign in with Google
    </button>
  );
}

export default Login;
