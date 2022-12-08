import { WIDTH } from '@constants/sizes';
import styled from 'styled-components';

export const Section = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

export const City = styled.p`
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.m}px`};
  line-heigth: 1;
  margin: 0;
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
`;

export const Label = styled.h4`
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.xl}px`};
  line-heigth: 1;
  margin: 0;
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
  text-transform: uppercase;
`;

export const WeatherIcon = styled.img`
  width: ${WIDTH[40]};
`;

export const Temperature = styled.p`
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.l}px`};
  width: auto;
  letter-spacing: ${({ theme: { spaces } }) => `-${spaces.xxs}px`};
  margin: ${({ theme: { spaces } }) => `${spaces.xs}px`} 0;
`;

export const Time = styled.p`
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.s}px`};
  letter-spacing: ${({ theme: { spaces } }) => `-${spaces.xxs}px`};
  width: auto;
  margin: ${({ theme: { spaces } }) => `${spaces.xs}px`} 0;
`;
