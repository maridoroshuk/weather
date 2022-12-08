import React, { useEffect, useState } from 'react';
import getWeatherIcon from '@utils/getWeatherIcon';
import { useSelector } from 'react-redux';
import { IForcastHourly } from '@customTypes/weather';
import Loader from '@components/Loader';
import { getWeatherDate, getLocalTime } from '@utils/date';
import {
  Label,
  Section,
  Temperature,
  WeatherIcon,
  Time,
} from './styled';

function Hourly() {
  const { hourly } = useSelector(
    (state: {
      weather: {
        hourly: IForcastHourly[] | null;
      };
    }) => state.weather,
  );

  const [todayWeatherList, setTodayWeatherList] = useState<
    IForcastHourly[] | undefined
  >(undefined);

  useEffect(() => {
    setTodayWeatherList(
      hourly?.filter(
        (el) => getWeatherDate(el.timestamp_local)
          === new Date().toLocaleDateString(),
      ),
    );
  }, [hourly]);

  return (
    <>
      <Label>Today</Label>
      {todayWeatherList
        && todayWeatherList.map((el) => (
          <Section>
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
      {!hourly && <Loader />}
    </>
  );
}

export default Hourly;
