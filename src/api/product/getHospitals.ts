import { HospitalTotalData } from '../../types/api';
import bedBeaconClient from '../client/bedBeacondClient';

const getHospitals = (latitude: string, longitude: string) => {
  const url = `api/hospitals/?latitude=${latitude}&longitude=${longitude}&sort=id`;
  const response = bedBeaconClient.get<HospitalTotalData>(url);
  return response;
};

export default getHospitals;
