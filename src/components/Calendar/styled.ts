import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  text-align: center;
`;

export const Title = styled.h3`
  color: ${({ theme: { colors } }) => `${colors.blue}`};
`;

export const Wrapper = styled.div`
  padding: ${({ theme: { spaces } }) => `${spaces.l}px`};
  background-color: ${({ theme: { colorsRGB } }) => `${colorsRGB.whiteTransparent}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;
