import { useEffect, useState } from 'react';
import { ICurrentLocation } from '@customTypes/weather';
import getCurrentLocation from '@utils/getCurrentLocation';

function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation | null>(null);

  useEffect(() => {
    getCurrentLocation(setCurrentLocation);
  }, []);

  return { currentLocation, setCurrentLocation };
}

export default useCurrentLocation;
