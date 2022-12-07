import {
  IForecastOpenWeather,
  IForecastWeatherBit,
} from '@customTypes/weather';

const transformForecastList = (
  data: Array<IForecastOpenWeather | IForecastWeatherBit>,
): { temp: number | null; code: number | null }[] => data.map((el) => {
  let temp;
  let code;
  if ('main' in el) {
    temp = el.main.temp;
    code = el.weather[0].id;
  } else {
    temp = el.temp;
    code = el.weather.code;
  }
  return { temp, code };
});

export default transformForecastList;
