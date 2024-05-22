import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import saveOperatingSystemInformation from '../util/saveOperatingSystemInfomation';
import bedBeacon from '../assets/main/bedBeaconLogo.webp';

const Initial = ({ isPermission }: { isPermission: boolean | null }) => {
  const navigate = useNavigate();

  useEffect(() => {
    saveOperatingSystemInformation();
    if (isPermission === true) {
      navigate('/result');
    }
    if (isPermission === false) {
      navigate('/select');
    }
  }, [isPermission, navigate]);

  return (
    <div className=" w-full h-screen items-center flex justify-evenly">
      <img className="w-full" src={bedBeacon} alt="bedBeacon" />
    </div>
  );
};

export default Initial;
