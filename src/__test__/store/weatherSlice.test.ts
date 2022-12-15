import {
  APIOptions,
} from '@customTypes/weather';
import reducer, {
  updateWeatherAPI,
  weatherDailyFailure,
  weatherDailySuccess,
  weatherHourlyFailure,
  weatherHourlySuccess,
  weatherRequest,
  WeatherState,
} from '@store/features/weatherSlice';
import { hourly, forecast } from '@mock/weather';

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
  icon: null,
  forecast: [],
  errorMessage: null,
};

const search = {
  lat: 27.5618225,
  lon: 53.9024716,
};
const city = 'Minsk, BY';
const temp = 282.21;
const icon = '03d';

const message = 'No data available';

describe('get weather', () => {
  it('should handle weather request and searh data and city being added', () => {
    const data = {
      search,
      city,
    };

    expect(
      reducer(prevState, weatherRequest(data)),
    ).toEqual({
      ...prevState,
      isLoading: true,
      search,
      city,
    });
  });

  it('should handle a new daily weather data  being added', () => {
    const data = {
      current: {
        temp,
        icon,
      },
      forecast,
    };
    expect(
      reducer(prevState, weatherDailySuccess(data)),
    ).toEqual({
      ...prevState,
      isLoading: false,
      temp,
      icon,
      forecast,
    });
  });

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
      reducer(
        prevState,
        updateWeatherAPI(dataWeatherBitApi),
      ),
    ).toEqual({
      ...prevState,
      isLoading: false,
      api: APIOptions.WEATHERBIT,
    });
  });
});
