import { Link } from 'react-router-dom';
import useGetHospitals from '../hooks/useGetHospitals';
import imageLoader from '../util/imageLoader';
import Loading from './Loading';
import Layout from '../components/Layout/Layout';
import List from '../components/List/List';

const Hospitals = () => {
  const { data, isLoading } = useGetHospitals(
    sessionStorage.getItem('latitude') as string,
    sessionStorage.getItem('longitude') as string
  );

  return (
    <Layout>
      {isLoading && <Loading />}
      {data && (
        <div className="grid place-items-center mobile:flex mobile:flex-col deskTop:grid deskTop:grid-cols-2 justify-center items-center gap-[20px]">
          {data.result.hospitalList.map((item) => (
            <Link to={`/result/${item.hpid}`} key={item.hpid}>
              <List
                key={item.hpid}
                name={item.dutyName}
                emergencyGeneralWard={item.hvec > 0 ? item.hvec : 0}
                generalWard={item.hvgc}
                distance={item.distance}
                location={item.dutyAddr}
                callNumber={item.dutyTel1}
                hospitalCode={item.hpid}
                image={imageLoader(item.hpid)}
              />
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Hospitals;
