import styled from 'styled-components';

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
  font-weight: ${({ theme: { fontWeight } }) => `${fontWeight[600]}px`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.m}px`};
  line-heigth: 1;
  margin: 0;
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
`;

export const Label = styled.h4`
  font-weight: ${({ theme: { fontWeight } }) => `${fontWeight[600]}px`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.xl}px`};
  line-heigth: 1;
  margin: 0;
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
  text-transform: uppercase;
`;

export const WeatherIcon = styled.img`
  width: ${({ theme: { width } }) => `${width[150]}px`};
`;

export const Temperature = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => `${fontWeight[600]}px`};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.xxl}px`};
  width: auto;
  letter-spacing: ${({ theme: { spaces } }) => `-${spaces.xxs}px`};
  margin: ${({ theme: { spaces } }) => `${spaces.xs}px`} 0;
`;
