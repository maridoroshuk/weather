import getCurrenCity from './getCurrenCity';

const geolocationApi = (): Promise<GeolocationPosition> => new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition(resolve);
});

const getPositionData = async () => {
  const position = await geolocationApi();
  return position;
};

const getInitLocation = () => {
  getPositionData().then(async (pos) => {
    const { latitude, longitude } = pos.coords;
    const currentCity = await getCurrenCity(
      latitude,
      longitude,
    );
    return { latitude, longitude, currentCity };
  });
};

export default getInitLocation;
