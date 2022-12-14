import styled from 'styled-components';
import { FONT_WEIGHT } from '@constants/sizes';

export const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`};
  text-align: center;
`;

export const Title = styled.h3`
  color: ${({ theme: { colors } }) => `${colors.blue}`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.l}px`};
`;

export const Text = styled.h3`
  color: ${({ theme: { colors } }) => `${colors.gray}`};
  font-weight: ${FONT_WEIGHT[500]};
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
`;

export const Wrapper = styled.div`
  padding: ${({ theme: { spaces } }) => `${spaces.l}px`};
  background-color: ${({ theme: { colorsRGB } }) => `${colorsRGB.whiteTransparent}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;
