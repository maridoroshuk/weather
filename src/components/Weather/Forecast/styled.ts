import styled from 'styled-components';
import {
  HEIGHT,
  WIDTH,
  FONT_WEIGHT,
} from '@constants/sizes';

export const Container = styled.ul`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: ${({ theme: { spaces } }) => `${spaces.l}px`};
  list-style-type: none;
`;

export const DailyItem = styled.li`
  background-color: ${({ theme: { colors } }) => `${colors.whitesmoke}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.xl}px`};
  flex-grow: 1;
  heigth: ${HEIGHT[40]};
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: ${({ theme: { spaces } }) => `${spaces.xxs}px`} 0;
  padding: ${({ theme: { spaces } }) => `${spaces.xxs}px ${spaces.xl}px`}
    0;
`;

export const WeatherIconSmall = styled.img`
  display: block;
  width: ${WIDTH[100]};
  background-color: ${({ theme: { colors } }) => `${colors.blue}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
  align-self: center;
`;
export const DayTitle = styled.label`
  margin-top: ${({ theme: { spaces } }) => `${spaces.xl}px`};
  color: ${({ theme: { colors } }) => `${colors.chromeBlack}`};
  flex: 1 1;
  font-weight: ${FONT_WEIGHT[600]};
`;

export const Temperature = styled.p`
  font-weight: ${FONT_WEIGHT[600]};
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.xl}px`};
  flex: 1 1;
  width: auto;
  letter-spacing: ${({ theme: { spaces } }) => `-${spaces.xs}px`};
  margin: ${({ theme: { spaces } }) => `${spaces.s}px`};
`;
