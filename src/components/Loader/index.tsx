import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from './styled';

function Loader() {
  return (
    <Container>
      <ReactLoading
        type="spin"
        color="#eee"
        height="10%"
        width="10%"
      />
    </Container>
  );
}

export default Loader;
