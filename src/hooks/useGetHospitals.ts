import { useQuery } from '@tanstack/react-query';
import getHospitals from '../api/product/getHospitals';

const useGetHospitals = (latitude: string, longitude: string) => {
  const STALETIME = 1000 * 60 * 3;
  return useQuery({
    queryKey: ['getAllHospitals'],
    // eslint-disable-next-line consistent-return
    queryFn: async () => {
      try {
        const resopnse = await getHospitals(latitude, longitude);
        return resopnse.data;
      } catch (e) {
        return null;
      }
    },
    staleTime: STALETIME,
  });
};

export default useGetHospitals;
