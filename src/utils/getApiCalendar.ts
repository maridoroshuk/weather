import ApiCalendar from 'react-google-calendar-api';

const config = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  scope:
    'https://www.googleapis.com/auth/calendar.readonly',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

const getApiCalendar = () => new ApiCalendar(config);

export default getApiCalendar;
