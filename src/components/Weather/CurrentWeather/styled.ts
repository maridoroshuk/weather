import { WIDTH } from '@constants/sizes';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${WIDTH[400]};
  flex-grow: 1;
  border-radius: ${({ theme: { spaces } }) => `${spaces.xl}px`};
  box-shadow: ${({ theme: { spaces } }) => `${spaces.s}px -${spaces.xxs}px ${spaces.l}px ${spaces.s}px rgb(0 0 0 / 30%)`};
  color: ${({ theme: { colors } }) => `${colors.white}`};
  background-color: ${({ theme: { colors } }) => `${colors.blue}`};
  margin: ${({ theme: { spaces } }) => `${spaces.l}px`} auto;
  padding: ${({ theme: { spaces } }) => `${spaces.xl}px`};
`;

export const Section = styled.div`
  text-align: center;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const City = styled.p`
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.m}px`};
  line-heigth: 1;
  margin: 0;
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxxs}px`};
`;

export const Label = styled.h4`
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.xl}px`};
  line-heigth: 1;
  margin: 0;
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxxs}px`};
  text-transform: uppercase;
`;

export const WeatherIcon = styled.img`
  width: ${WIDTH[150]};
`;

export const Temperature = styled.p`
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.xxl}px`};
  width: auto;
  letter-spacing: ${({ theme: { spaces } }) => `-${spaces.xxxs}px`};
  margin: ${({ theme: { spaces } }) => `${spaces.xs}px`} 0;
`;
