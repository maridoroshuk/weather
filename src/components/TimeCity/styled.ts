import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${({ theme: { spaces } }) => `${spaces.xl}px`};
  background-color: ${({ theme: { colorsRGB } }) => `${colorsRGB.whiteTransparent}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;

export const Section = styled.div``;
