import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  text-align: center;
`;

export const Title = styled.h3`
margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  color: ${({ theme: { colors } }) => `${colors.blue}`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.l}px`};
`;

export const Text = styled.h3`
  color: ${({ theme: { colors } }) => `${colors.gray}`};
  font-weight: ${({ theme: { fontWeight } }) => `${fontWeight[500]}px`};
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
`;

export const Wrapper = styled.div`
  padding: ${({ theme: { spaces } }) => `${spaces.l}px`};
  background-color: ${({ theme: { colorsRGB } }) => `${colorsRGB.whiteTransparent}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;
