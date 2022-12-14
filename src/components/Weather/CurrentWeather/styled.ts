import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme: { width } }) => `${width[400]}px`};
  flex-grow: 1;
  border-radius: ${({ theme: { spaces } }) => `${spaces.xl}px`};
  box-shadow: ${({ theme: { spaces } }) => `${spaces.s}px -${spaces.xxs}px ${spaces.l}px ${spaces.s}px rgb(0 0 0 / 30%)`};
  color: ${({ theme: { colors } }) => `${colors.white}`};
  background-color: ${({ theme: { colors } }) => `${colors.blue}`};
  margin: 0 auto;
  padding: ${({ theme: { spaces } }) => `${spaces.xl}px`};
`;
