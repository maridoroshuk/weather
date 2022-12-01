export interface IForecast {
  main: {
    temp: number | null;
  };
  weather: {
    icon: string | null;
  }[];
}
