import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IForecastDaily } from 'src/customTypes/weather';
import forecastDays from '@utils/forecastDays';
import { OPEN_WEATHER_IMAGE } from '@constants/api';
import {
  Container,
  DailyItem,
  DayTitle,
  Temperature,
  WeatherIconSmall,
} from './styled';

interface IForecast {
  forecast: IForecastDaily[];
}

function Forecast({ forecast }: IForecast) {
  return (
    <Container>
      {forecast
        && forecast.map((item, index) => (
          <DailyItem key={uuidv4()}>
            <DayTitle>{forecastDays[index]}</DayTitle>
            {item.weather[0].icon && (
              <WeatherIconSmall
                alt="weather"
                src={`${OPEN_WEATHER_IMAGE}/${item.weather[0].icon}@2x.png`}
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
