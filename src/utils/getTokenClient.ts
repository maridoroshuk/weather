function getTokenClient() {
  const tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope:
        'https://www.googleapis.com/auth/calendar.readonly',
    callback: '',
  });

  return tokenClient;
}

export default getTokenClient;
