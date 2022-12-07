import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;
