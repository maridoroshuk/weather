import ApiCalendar from 'react-google-calendar-api';
import { IEvent } from '@customTypes/calendar';
import { getEndOfDayDate } from '@utils/date';

const request = {
  calendarId: 'primary',
  timeMin: new Date().toISOString(),
  timeMax: getEndOfDayDate.toISOString(),
  showDeleted: false,
  singleEvents: true,
  maxResults: 10,
  orderBy: 'startTime',
};

const getEventsList = async (
  calendar: ApiCalendar,
): Promise<IEvent[]> => {
  const response = await calendar.listEvents(request);
  const { items } = response.result;
  return items;
};

export default getEventsList;
