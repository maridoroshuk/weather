import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  padding: ${({ theme: { spaces } }) => `${spaces.s}px`};
  background-color: ${({ theme: { colors } }) => `${colors.transparent}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.m}px`};
  cursor: pointer;
  border: ${({ theme: { spaces, colors } }) => `${spaces.xxs}px solid ${colors.blue}`};
`;
