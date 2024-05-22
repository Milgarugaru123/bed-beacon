import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Initial from './pages/Initial';
import Result from './pages/Result';
import getPermission from './util/getPermission';
import SelectionLocation from './pages/SelectionLocation';
import Detail from './pages/Detail';
import Hospitals from './pages/Hospitals';
import Setting from './pages/Setting';

const Router = () => {
  const [locationPermission, setLocationPermission] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    getPermission().then((isPermission) => {
      setLocationPermission(isPermission);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Initial isPermission={locationPermission} />} />
      <Route path="/select" element={<SelectionLocation />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result/:hospitalCode" element={<Detail />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="setting" element={<Setting />} />
    </Routes>
  );
};

export default Router;
