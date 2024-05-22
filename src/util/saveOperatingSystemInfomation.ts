import { OS } from '../types/common';

const saveOperatingSystemInformation = () => {
  const { userAgent } = navigator;
  let os: OS = 'Unknown';

  if (/Windows/.test(userAgent)) {
    os = 'Windows';
  } else if (/Macintosh/.test(userAgent)) {
    os = 'MacOS';
  } else if (/iPhone|iPad/.test(userAgent)) {
    os = 'iOS';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(userAgent)) {
    os = 'Linux';
  }

  sessionStorage.setItem('os', os);
};

export default saveOperatingSystemInformation;
