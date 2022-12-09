import { WEATHER_CODES } from '@constants/weatherConditionCondition';

const getWeatherIcon = (code: number): string => {
  if (code > 200 && code < 300) {
    return WEATHER_CODES.THUNDERSTORM;
  }
  if (code >= 300 && code < 500) {
    return WEATHER_CODES.DRIZZLE;
  }
  if (code >= 500 && code <= 504) {
    return WEATHER_CODES.RAIN;
  }
  if (code === 511) {
    return WEATHER_CODES.FREEZING_RAIN;
  }
  if (code >= 520 && code < 600) {
    return WEATHER_CODES.SHOWER_RAIN;
  }
  if (code >= 600 && code < 700) {
    return WEATHER_CODES.SNOW;
  }
  if (code >= 701 && code < 800) {
    return WEATHER_CODES.ATMOSPHERE;
  }
  if (code === 800) {
    return WEATHER_CODES.CLEAR;
  }
  if (code === 801) {
    return WEATHER_CODES.FEW_CLOUDS;
  }
  if (code === 802) {
    return WEATHER_CODES.SCATTERED_CLOUDS;
  }
  if (code >= 803 && code <= 804) {
    return WEATHER_CODES.BROKEN_CLOUDS;
  }
  return WEATHER_CODES.UNKNOWN;
};

export default getWeatherIcon;
