import ApiCalendar from 'react-google-calendar-api';
import { GOOGLE_API } from '@constants/api';

const config = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  scope:
    `${GOOGLE_API}/auth/calendar.readonly`,
  discoveryDocs: [
    `${GOOGLE_API}/discovery/v1/apis/calendar/v3/rest`,
  ],
};

const getApiCalendar = () => new ApiCalendar(config);

export default getApiCalendar;
