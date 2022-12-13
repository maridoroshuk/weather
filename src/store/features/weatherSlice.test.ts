import { APIOptions } from '@customTypes/weather';
import reducer, {
  weatherDailySuccess,
  WeatherState,
} from './weatherSlice';

const temp = 282.21;
const code = 803;
const forecast = [
  {
    main: {
      temp: 296.76,
    },
    weather: [
      {
        id: 500,
      },
    ],
  },
  {
    main: {
      temp: 295.45,
    },
    weather: [
      {
        id: 500,
      },
    ],
  },
  {
    main: {
      temp: 292.46,
    },
    weather: [
      {
        id: 500,
      },
    ],
  },
];

it('new daily weather data should be added', () => {
  const prevState: WeatherState = {
    search: {
      lat: null,
      lon: null,
    },
    city: null,
    api: APIOptions.OPENWEATHER,
    hourly: [],
    isLoading: false,
    temp: null,
    code: null,
    forecast: [],
    errorMessage: null,
  };

  const data = {
    current: {
      temp,
      code,
    },
    forecast,
  };
  expect(
    reducer(prevState, weatherDailySuccess(data)),
  ).toEqual({
    ...prevState,
    temp,
    code,
    forecast,
  });
});
