import { WEEK_DAYS } from '@constants/weekDays';

const currentWeekDay = new Date().getDay();

const forecastDays = WEEK_DAYS.slice(
  currentWeekDay,
  WEEK_DAYS.length,
).concat(WEEK_DAYS.slice(0, currentWeekDay));

export default forecastDays;
