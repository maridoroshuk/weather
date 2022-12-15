import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IForcastHourly } from '@customTypes/weather';
import Loader from '@components/Loader';
import { getLocalTime } from '@utils/date';
import getTodayHourlyForecast from '@utils/getTodayHourlyForecast';
import {
  Container,
  Label,
  Section,
  Temperature,
  WeatherIcon,
  Time,
} from './styled';

interface IHourly {
  hourlyList: IForcastHourly[];
}

function Hourly({ hourlyList }: IHourly) {
  const data = getTodayHourlyForecast(hourlyList);
  const renderLoader = () => {
    if (!hourlyList) {
      return <Loader />;
    }
  };
  return (
    <Container>
      <Label>Today</Label>
      {data.map(
        ({ timestamp_local, app_temp, weather }) => (
          <Section key={uuidv4()}>
            <Time>{getLocalTime(timestamp_local)}</Time>
            <WeatherIcon
              alt="weather"
              src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
            />
            <Temperature>
              {Math.round(app_temp)}
              °C
            </Temperature>
          </Section>
        ),
      )}
      {renderLoader()}
    </Container>
  );
}

export default Hourly;
