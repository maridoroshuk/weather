import styled from 'styled-components';

export const Container = styled.ul`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  list-style-type: none;
`;

export const DailyItem = styled.li`
  background-color: #f5f5f5;
  border-radius: 1.2rem;
  flex-grow: 1;
  heigth: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0.4rem 0;
  padding: 0.3rem 1.2rem;
  @media (min-width: 600px) {
  }
`;

export const WeatherIconSmall = styled.img`
  align-self: center;
  width: 3rem;
  @media (min-width: 600px) {
    margin-right: 1rem;
  }
`;
export const DayTitle = styled.label`
  margin-top: 2rem;
  color: #212121;
  flex: 1 1;
  font-weight: 600;
`;

export const Temperature = styled.p`
  font-weight: 600;
  font-size: 2rem;
  flex: 1 1;
  width: auto;
  letter-spacing: -0.2rem;
  margin: 0.5rem;
`;
