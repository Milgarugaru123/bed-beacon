import axios from 'axios';

const getLocationName = async (latitude: string, longitude: string) => {
  const response = await axios.get(
    'https://nominatim.openstreetmap.org/reverse',
    {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json',
        addressdetail: 1,
      },
    }
  );
  const { address } = response.data;
  const city = address.city || address.town || address.village || '';
  const district =
    address.suburb || address.city_district || address.county || '';

  sessionStorage.setItem('city', city);
  sessionStorage.setItem('district', district);

  return `${city} ${district}`;
};

export default getLocationName;
