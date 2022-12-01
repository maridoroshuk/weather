import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface ILoginProps {
  onGoogleResponse: (res: any) => void;
  onResponseError: (err: string) => void;
}

function Login({
  onGoogleResponse,
  onResponseError,
}: ILoginProps) {
  const responseGoogle = (res: any) => {
    onGoogleResponse(res);
  };

  const responseError = () => {
    onResponseError('Login Failed');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={responseError}
      />
    </div>
  );
}

export default Login;
