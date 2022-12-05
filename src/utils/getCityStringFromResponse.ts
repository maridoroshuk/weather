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

export default getCityStringFromResponse;
