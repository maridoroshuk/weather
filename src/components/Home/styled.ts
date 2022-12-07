import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  font-family: Roboto, sans-serif;
`;

export const Wrapper = styled.div`
  background-size: cover;
  padding: ${({ theme: { spaces } }) => `${spaces.xs}px`};
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;
