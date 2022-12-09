import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import getWeatherIcon from '@utils/getWeatherIcon';
import { IForcastHourly } from '@customTypes/weather';
import Loader from '@components/Loader';
import { getLocalTime } from '@utils/date';
import getTodayHourlyForecast from '@utils/getTodayHourlyForecast';
import {
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

  return (
    <>
      <Label>Today</Label>
      {data.map((el) => (
        <Section key={uuidv4()}>
          <Time>{getLocalTime(el.timestamp_local)}</Time>
          <WeatherIcon
            alt="weather"
            src={`icons/${getWeatherIcon(
              el.weather.code,
            )}.png`}
          />
          <Temperature>
            {Math.round(el.app_temp)}
            °C
          </Temperature>
        </Section>
      ))}
      {!hourlyList && <Loader />}
    </>
  );
}

export default Hourly;
