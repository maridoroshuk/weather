import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;
