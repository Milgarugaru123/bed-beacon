import axios from 'axios';
import { HospitalEmerMedAvailableData } from '../../types/api';

const getEmerMedAvailable = (city: string, district: string) => {
  const stage1 = city;
  const stage2 = district;
  const url = `http://apis.data.go.kr/B552657/ErmctInfoInqireService/getSrsillDissAceptncPosblInfoInqire?serviceKey=${
    import.meta.env.VITE_SERVICE_KEY
  }&STAGE1=${stage1}&STAGE2=${stage2}&pageNo=1&numOfRows=10`;
  const resopnse = axios.get<HospitalEmerMedAvailableData>(url);
  return resopnse;
};

export default getEmerMedAvailable;
