import { IForcastHourly } from '@customTypes/weather';

export const hourly: IForcastHourly[] = [
  {
    app_temp: 296.76,
    weather: {
      icon: 't04d',
    },
    timestamp_local: '2022-04-02T01:00:00',
  },
  {
    app_temp: 295.45,
    weather: {
      icon: 'r05d',
    },
    timestamp_local: '2022-04-02T02:00:00',
  },
  {
    app_temp: 292.46,
    weather: {
      icon: 'd01d',
    },
    timestamp_local: '2022-04-02T03:00:00',
  },
];

export const forecast = [
  {
    main: {
      temp: 296.76,
    },
    weather: [
      {
        icon: '03d',
      },
    ],
  },
  {
    main: {
      temp: 295.45,
    },
    weather: [
      {
        icon: '04d',
      },
    ],
  },
  {
    main: {
      temp: 292.46,
    },
    weather: [
      {
        icon: '09d',
      },
    ],
  },
];

export const currentLocation = {
  lat: 27.5618225,
  lon: 53.9024716,
  currentCity: 'Minsk, BY',
};
