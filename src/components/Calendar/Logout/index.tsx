import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface ILoginProps {
  onLogout: () => void;
}

function Logout({ onLogout }: ILoginProps) {
  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  );
}

export default Logout;
