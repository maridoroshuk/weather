import React from 'react';
import {
  APIOptions,
  IForcastHourly,
} from '@customTypes/weather';
import { useSelector } from 'react-redux';
import { Container } from './styled';
import Daily from './Daily';
import Hourly from './Hourly';

function CurrentWeather() {
  const {
    api, temp, icon, hourly,
  } = useSelector(
    (state: {
      weather: {
        api: APIOptions;
        temp: number;
        icon: string;
        hourly: IForcastHourly[];
      };
    }) => state.weather,
  );

  const isDaily = api === APIOptions.OPENWEATHER;

  const renderDailyOrHoulyWeather = () => {
    if (isDaily) {
      return <Daily temp={temp} icon={icon} />;
    }
    return <Hourly hourlyList={hourly} />;
  };

  return (
    <Container>
      {renderDailyOrHoulyWeather()}
    </Container>
  );
}

export default CurrentWeather;
