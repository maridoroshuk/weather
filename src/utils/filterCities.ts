import { GEO_API_URL } from '@constants/api';
import getCityStringFromResponse from './getCityStringFromResponse';

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
