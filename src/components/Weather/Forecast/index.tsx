import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { WEEK_DAYS } from '@constants/weekDays';
import { IForecast } from 'src/customTypes/weather';
import {
  Container,
  DailyItem,
  DayTitle,
  Temperature,
  WeatherIconSmall,
} from './styled';

interface ForecastProps {
  forecast: IForecast[];
}

function Forecast({ forecast }: ForecastProps) {
  const currentWeekDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(
    currentWeekDay,
    WEEK_DAYS.length,
  ).concat(WEEK_DAYS.slice(0, currentWeekDay));

  return (
    <Container>
      {forecast.map((item, index) => (
        <DailyItem key={uuidv4()}>
          <DayTitle>{forecastDays[index]}</DayTitle>
          <WeatherIconSmall
            alt="weather"
            src={`icons/${item.weather[0].icon}.png`}
          />
          <Temperature>
            {item.main.temp && Math.round(item.main.temp)}
            °C
          </Temperature>
        </DailyItem>
      ))}
    </Container>
  );
}

export default Forecast;
