import { IEvent } from '@customTypes/events';
import { getEndOfDayDate } from '@utils/date';

const { gapi } = window;

interface ServerResponse {
  items: IEvent[];
}

const request = {
  calendarId: 'primary',
  timeMin: new Date().toISOString(),
  timeMax: getEndOfDayDate.toISOString(),
  showDeleted: false,
  singleEvents: true,
  maxResults: 10,
  orderBy: 'startTime',
};

const getEventsList = async (): Promise<ServerResponse> => {
  const response = await gapi.client.calendar.events.list(
    request,
  );
  return response.result.items;
};

export default getEventsList;
