import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  const renderLoader = () => {
    if (!hourlyList) {
      return <Loader />;
    }
  };
  return (
    <>
      <Label>Today</Label>
      {data.map((el) => (
        <Section key={uuidv4()}>
          <Time>{getLocalTime(el.timestamp_local)}</Time>
          <WeatherIcon
            alt="weather"
            src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}
          />
          <Temperature>
            {Math.round(el.app_temp)}
            °C
          </Temperature>
        </Section>
      ))}
      {renderLoader()}
    </>
  );
}

export default Hourly;
