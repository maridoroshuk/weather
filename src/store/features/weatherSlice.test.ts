import {
  APIOptions,
  IForcastHourly,
} from '@customTypes/weather';
import reducer, {
  updateWeatherAPI,
  weatherDailyFailure,
  weatherDailySuccess,
  weatherHourlyFailure,
  weatherHourlySuccess,
  weatherRequest,
  WeatherState,
} from './weatherSlice';

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

const search = {
  lat: 27.5618225,
  lon: 53.9024716,
};

const city = 'Minsk, BY';

it('should handle weather request and searh data and city being added', () => {
  const data = {
    search,
    city,
  };

  expect(reducer(prevState, weatherRequest(data))).toEqual({
    ...prevState,
    isLoading: true,
    search,
    city,
  });
});

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

it('should handle a new daily weather data  being added', () => {
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
    isLoading: false,
    temp,
    code,
    forecast,
  });
});

const hourly: IForcastHourly[] = [
  {
    app_temp: 296.76,
    weather: {
      code: 500,
    },
    timestamp_local: '2022-04-02T01:00:00',
  },
  {
    app_temp: 295.45,
    weather: {
      code: 500,
    },
    timestamp_local: '2022-04-02T02:00:00',
  },
  {
    app_temp: 292.46,
    weather: {
      code: 500,
    },
    timestamp_local: '2022-04-02T03:00:00',
  },
];

it('should handle a new hourly weather data  being added', () => {
  const data = {
    current: hourly,
  };
  expect(
    reducer(prevState, weatherHourlySuccess(data)),
  ).toEqual({
    ...prevState,
    isLoading: false,
    hourly,
  });
});

const message = 'No data available';

it('should handle weather daily and weather hourly errors being added', () => {
  const data = {
    message,
  };
  expect(
    reducer(prevState, weatherDailyFailure(data)),
  ).toEqual({
    ...prevState,
    isLoading: false,
    errorMessage: message,
  });
  expect(
    reducer(prevState, weatherHourlyFailure(data)),
  ).toEqual({
    ...prevState,
    isLoading: false,
    errorMessage: message,
  });
});

it('should handle weather api being updated', () => {
  const dataOpenWeather = {
    api: APIOptions.OPENWEATHER,
  };
  const dataWeatherBitApi = {
    api: APIOptions.WEATHERBIT,
  };
  expect(
    reducer(prevState, updateWeatherAPI(dataOpenWeather)),
  ).toEqual({
    ...prevState,
    api: APIOptions.OPENWEATHER,
  });
  expect(
    reducer(prevState, updateWeatherAPI(dataWeatherBitApi)),
  ).toEqual({
    ...prevState,
    isLoading: false,
    api: APIOptions.WEATHERBIT,
  });
});
