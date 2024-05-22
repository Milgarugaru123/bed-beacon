import { HospitalDetailRoomData } from '../../types/api';
import bedBeaconClient from '../client/bedBeacondClient';

const getHospitalDetail = (hospitalCode: string) => {
  const url = `api/hospitals/${hospitalCode}/specInfo`;
  const response = bedBeaconClient.get<HospitalDetailRoomData>(url);
  return response;
};

export default getHospitalDetail;
