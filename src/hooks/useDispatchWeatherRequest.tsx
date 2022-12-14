import { useDispatch } from 'react-redux';
import { ICurrentLocation } from '@customTypes/weather';
import { weatherRequest } from '@store/features/weatherSlice';

function useDispatchWeatherRequest(
  currentLocation: ICurrentLocation | null,
) {
  const dispatch = useDispatch();

  const dispatchWeatherRequest = () => {
    if (currentLocation) {
      dispatch(
        weatherRequest({
          search: {
            lat: currentLocation.lat,
            lon: currentLocation.lon,
          },
          city: currentLocation.currentCity,
        }),
      );
    }
  };

  return dispatchWeatherRequest;
}

export default useDispatchWeatherRequest;
