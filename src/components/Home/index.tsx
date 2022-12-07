import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { getWeatherRequest } from '@store/features/weatherSlice';
import Weather from '@components/Weather';
import TimeCity from '@components/TimeCity';
import Calendar from '@components/Calendar';
import SwitchWeatherAPI from '@components/SwitchWeatherAPI';
import {
  ICurrentLocation,
  IOptions,
} from '@customTypes/weather';
import getCurrenCity from '@utils/getCurrenCity';
import Loader from '@components/Loader';

function Home() {
  const dispatch = useDispatch();

  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation>({
    lat: null,
    lon: null,
    currentCity: null,
  });

  const isCurrentLocationExist = currentLocation.lat
    && currentLocation.lon
    && currentLocation.currentCity;

  const dispatchWeatherRequest = () => {
    if (isCurrentLocationExist) {
      dispatch(
        getWeatherRequest({
          search: {
            lat: currentLocation.lat,
            lon: currentLocation.lon,
          },
          city: currentLocation.currentCity,
        }),
      );
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const currentCity = await getCurrenCity(
          latitude,
          longitude,
        );
        setCurrentLocation({
          lat: latitude,
          lon: longitude,
          currentCity,
        });
      },
    );
  }, []);

  useEffect(() => {
    dispatchWeatherRequest();
  }, [currentLocation]);

  const handleSearchChange = (search: IOptions | null) => {
    if (search) {
      const [lat, lon]: string[] = search.value.split(' ');
      setCurrentLocation({
        lat: +lat,
        lon: +lon,
        currentCity: search.label,
      });
      dispatchWeatherRequest();
    }
  };

  return (
    <>
      {isCurrentLocationExist
        && currentLocation.currentCity && (
          <>
            <SearchBar
              onSearchChange={handleSearchChange}
              currentLocation={currentLocation}
            />
            <SwitchWeatherAPI
              onAPIChange={dispatchWeatherRequest}
            />
            <TimeCity
              defaultCity={currentLocation.currentCity}
            />
            <Calendar />
            <Weather />
          </>
      )}
      {!isCurrentLocationExist && <Loader />}
    </>
  );
}

export default Home;
