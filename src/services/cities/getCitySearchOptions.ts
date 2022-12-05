import { GEO_API_URL } from '@constants/api';
import { IOptions } from '@customTypes/search';
import getCityStringFromResponse from '@utils/getCityStringFromResponse';

interface ServerResponse {
  options: IOptions[];
  hasMore: boolean;
}
const getCitySearchOptions = async (
  query: string,
): Promise<ServerResponse> => {
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
  console.log(data);
  const options = getCityStringFromResponse(data);

  return {
    options,
    hasMore: data.length >= 1,
  };
};

export default getCitySearchOptions;
