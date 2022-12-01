// import { gapi } from 'gapi-script';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

let tokenClient: any;

export const initializeGapiClient = () => async function () {
  try {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '',
    });
  } catch (err) {
    console.log(err);
  }
};
export const getGoogleEvents = async () => {
  // const [start, end] = getIsoDates();
  try {
    const response = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      },
    );
    if (response.status !== 200) {
      throw Error();
    }
    const { events } = await response.json();
    console.log(events);
    return events;
  } catch {
    console.log('Error!');
  }
  return '';
};
