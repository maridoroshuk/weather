import { ICurrentLocation } from '@customTypes/weather';
import getCurrenCity from './getCurrenCity';

const getCurrentLocation = (
  setLocation: (state: ICurrentLocation) => void,
) => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    const currentCity = await getCurrenCity(
      latitude,
      longitude,
    );
    setLocation({
      lat: latitude,
      lon: longitude,
      currentCity,
    });
  });
};

export default getCurrentLocation;
