const { gapi } = window;

const initializeGapiClient = async () => {
  await gapi.client.init({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ],
  });
};

export default initializeGapiClient;
