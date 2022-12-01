import React, { useEffect } from 'react';

function Calendar() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  const { gapi } = window;

  let tokenClient: any;
  let gapiInited = false;
  let gisInited = false;

  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
  }

  function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '',
    });
    gisInited = true;
  }

  useEffect(() => {
    window.addEventListener('load', initializeGapiClient);
    gapiLoaded();
    gisLoaded();
    return () => window.removeEventListener(
      'load',
      initializeGapiClient,
    );
  }, []);

  function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken(null);
    }
  }
  async function listUpcomingEvents() {
    let response;
    try {
      const request = {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      };
      response = await gapi.client.calendar.events.list(
        request,
      );
    } catch (err: any) {
      console.log(err.message);
    }

    const events = response.result.items;
    if (!events || events.length === 0) {
      console.log('No events found!');
    }

    const output = events.reduce(
      (str: any, event: any) => `${str}${event.summary} (${
        event.start.dateTime || event.start.date
      })\n`,
      'Events:\n',
    );

    console.log(output);
  }

  function handleAuthClick() {
    tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      await listUpcomingEvents();
    };

    if (gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  return (
    <>
      <button type="button" onClick={handleAuthClick}>
        SignIn
      </button>
      <button type="button" onClick={handleSignoutClick}>
        SignOut
      </button>
    </>
  );
}
export default Calendar;
