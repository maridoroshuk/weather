import { GEO_API_URL } from '@constants/api';

interface ICity {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

const getCityStringFromResponse = (list: ICity[]) => list.map((city) => ({
  value: `${city.latitude} ${city.longitude}`,
  label: `${city.name}, ${city.country}`,
}));

const filterCities = async (query: string) => {
  const response = await fetch(
    `${GEO_API_URL}/city?limit=30&name=${query}`,
    {
      method: 'GET',
      headers: {
        'X-API-Key': `${process.env.REACT_APP_NINJAS_API_KEY}`,
      },
    },
  );

  const data = await response.json();
  const options = getCityStringFromResponse(data);
  return options;
};

export default filterCities;
