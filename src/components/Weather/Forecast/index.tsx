import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { WEEK_DAYS } from '@constants/weekDays';
import { ForecastType } from 'src/customTypes/weather';
import getWeatherIcon from '@utils/getWeatherIcon';
import transformForecastList from '@utils/transformForecastList';
import {
  Container,
  DailyItem,
  DayTitle,
  Temperature,
  WeatherIconSmall,
} from './styled';

interface ForecastProps {
  forecast: ForecastType;
}

function Forecast({ forecast }: ForecastProps) {
  const currentWeekDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(
    currentWeekDay,
    WEEK_DAYS.length,
  ).concat(WEEK_DAYS.slice(0, currentWeekDay));

  const data = transformForecastList(forecast);

  return (
    <Container>
      {data
        && data.map((item, index) => (
          <DailyItem key={uuidv4()}>
            <DayTitle>{forecastDays[index]}</DayTitle>
            {item.code && (
              <WeatherIconSmall
                alt="weather"
                src={`icons/${getWeatherIcon(
                  item.code,
                )}.png`}
              />
            )}
            <Temperature>
              {item.temp && Math.round(item.temp)}
              °C
            </Temperature>
          </DailyItem>
        ))}
    </Container>
  );
}

export default Forecast;
