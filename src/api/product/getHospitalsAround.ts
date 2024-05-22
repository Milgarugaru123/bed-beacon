import { HospitalTotalData } from '../../types/api';
import bedBeaconClient from '../client/bedBeacondClient';

const getHospitalsAround = (latitude: string, longitude: string) => {
  const url = `api/hospitals/around?latitude=${latitude}&longitude=${longitude}`;
  const response = bedBeaconClient.get<HospitalTotalData>(url);
  return response;
};

export default getHospitalsAround;
