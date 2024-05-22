import { useQuery } from '@tanstack/react-query';
import getHospitalDetail from '../api/product/getHospitalDetail';
import extractCityAndDistrict from '../util/extractCityAndDistrict';
import getEmerMedAvailable from '../api/public/getEmerMedAvailable';
import getHospitals from '../api/product/getHospitals';
import { HospitalEmerMedAvailableItem } from '../types/api';

const useGetHospitalDetail = (
  latitude: string,
  longitude: string,
  hospitalCode: string
) => {
  return useQuery({
    queryKey: ['getHospitalDetail', hospitalCode],
    // eslint-disable-next-line consistent-return
    queryFn: async () => {
      try {
        const hospitalDetailResponse = await getHospitalDetail(hospitalCode);

        // 여기서 데이터를 가져와야함.
        const hospitalsResponse = await getHospitals(latitude, longitude);

        const hospitalDetail = hospitalDetailResponse.data;
        const hospitals = hospitalsResponse.data.result.hospitalList;

        const matchingHospital = hospitals.find(
          (item) => item.hpid === hospitalDetail.hpid
        );

        const cityAndDistrict = extractCityAndDistrict(
          matchingHospital?.dutyAddr as string
        );

        const emerMedAvailableResponse = await getEmerMedAvailable(
          cityAndDistrict[0],
          cityAndDistrict[1]
        );

        const hospitalList =
          emerMedAvailableResponse.data.response.body.items.item;

        let surgeryList: HospitalEmerMedAvailableItem[] = [];

        if (Array.isArray(hospitalList)) {
          surgeryList = hospitalList.filter(
            (item) => item.dutyName === hospitalCode
          );
        } else if (hospitalList.dutyName === hospitalCode) {
          surgeryList = [hospitalList];
        }

        return {
          hospitalName: hospitalDetail.dutyName,
          hospitalLocation: matchingHospital?.dutyAddr,
          hospitalDistance: matchingHospital?.distance,
          hospitalCallNumber: matchingHospital?.dutyTel1,
          hospitalLink: matchingHospital?.url,
          hospitalCode: hospitalDetail.hpid,
          hospitalRoomData: [
            {
              roomName: '입원실',
              availableRooms: hospitalDetail.hvgc,
            },
            {
              roomName: '수술실',
              availableRooms: hospitalDetail.hvoc,
            },
            {
              roomName: '신경중환자',
              availableRooms: hospitalDetail.hvcc,
            },
            {
              roomName: '흉부중환자',
              availableRooms: hospitalDetail.hvccc,
            },
            {
              roomName: '일반중환자',
              availableRooms: hospitalDetail.hvicc,
            },
            {
              roomName: '신생중환자',
              availableRooms: hospitalDetail.hvncc,
            },
          ],
          surgeryList,
        };
      } catch (e) {
        return null;
      }
    },
  });
};

export default useGetHospitalDetail;
