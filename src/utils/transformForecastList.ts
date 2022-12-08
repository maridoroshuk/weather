import {
  IForecastDaily,
  IForcastHourly,
} from '@customTypes/weather';

const transformForecastList = (
  data: Array<IForecastDaily | IForcastHourly>,
): { temp: number | null; code: number | null }[] => data.map((el) => {
  let temp;
  let code;
  if ('main' in el) {
    temp = el.main.temp;
    code = el.weather[0].id;
  } else {
    temp = 155;
    code = 200;
  }
  return { temp, code };
});

export default transformForecastList;
