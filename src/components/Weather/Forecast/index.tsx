import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { WEEK_DAYS } from '@constants/weekDays';
import { IForecastDaily } from 'src/customTypes/weather';
import getWeatherIcon from '@utils/getWeatherIcon';
import {
  Container,
  DailyItem,
  DayTitle,
  Temperature,
  WeatherIconSmall,
} from './styled';

interface ForecastProps {
  forecast: IForecastDaily[];
}

function Forecast({ forecast }: ForecastProps) {
  const currentWeekDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(
    currentWeekDay,
    WEEK_DAYS.length,
  ).concat(WEEK_DAYS.slice(0, currentWeekDay));

  return (
    <Container>
      {forecast
        && forecast.map((item, index) => (
          <DailyItem key={uuidv4()}>
            <DayTitle>{forecastDays[index]}</DayTitle>
            {item.weather[0].id && (
              <WeatherIconSmall
                alt="weather"
                src={`icons/${getWeatherIcon(
                  item.weather[0].id,
                )}.png`}
              />
            )}
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
