import { GEO_APIFY_URL } from '@constants/api';

const getCurrenCity = async (
  latitude: number,
  longitude: number,
) => {
  const res = await fetch(
    `${GEO_APIFY_URL}/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${
      process.env.REACT_APP_GEO_APIFY_API_KEY}`,
  );
  const data = await res.json();
  const { country_code, county } = data.results[0];
  return `${county}, ${country_code.toUpperCase()}`;
};

export default getCurrenCity;
