import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  flex-grow: 1;
  border-radius: 0.5rem;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: #fff;
  background-color: #118ab2;
  margin: 1.2rem auto;
  padding: 1.2rem;
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
  font-size: 1.2rem;
  line-heigth: 1;
  margin: 0;
  letter-spacing: 1px;
`;

export const Label = styled.h4`
  font-weight: 600;
  font-size: 2rem;
  line-heigth: 1;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const WeatherIcon = styled.img`
  width: 8rem;
`;

export const Temperature = styled.p`
  font-weight: 600;
  font-size: 5rem;
  width: auto;
  letter-spacing: -0.2rem;
  margin: 0.3rem 0;
`;
