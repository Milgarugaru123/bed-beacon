import { HospitalDutyTimeData } from '../../types/api';
import bedBeaconClient from '../client/bedBeacondClient';

const getHospitalsDutyTimes = (hospitalCode: string) => {
  const url = `api/hospitals/${hospitalCode}/dutyTimes`;
  const response = bedBeaconClient.get<HospitalDutyTimeData>(url);
  return response;
};

export default getHospitalsDutyTimes;
