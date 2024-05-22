import { Position } from '../types/common';

const saveLocationInformation = (position: GeolocationPosition | Position) => {
  let latitude = '';
  let longitude = '';
  if ('coords' in position) {
    latitude = position.coords.latitude.toString();
    longitude = position.coords.longitude.toString();
  } else {
    latitude = position.latitude;
    longitude = position.longitude;
  }
  sessionStorage.setItem('latitude', latitude);
  sessionStorage.setItem('longitude', longitude);
};

export default saveLocationInformation;
