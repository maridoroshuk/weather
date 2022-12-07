import styled from 'styled-components';
import { WIDTH } from '@constants/sizes';

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => `${colors.whitesmoke}`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.s}px`};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ theme: { spaces } }) => `${spaces.s}px`};
  padding: ${({ theme: { spaces } }) => `${spaces.s}px`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
  gap: ${({ theme: { spaces } }) => `${spaces.l}px`};
`;

export const Title = styled.p`
  word-break: break-all;
`;

export const DateString = styled.p`
  font-weight: 700;
`;

export const DateContainer = styled.div`
  width: 20%;
  min-width: ${WIDTH[100]};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: { spaces } }) => `${spaces.xs}px`};
`;
