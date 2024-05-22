import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import districtsByCity from '../data/districtsByCity';

const SelectionLocation = () => {
  const [city, setCity] = useState<string>();
  const [district, setDistrict] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem('latitude') !== null &&
      sessionStorage.getItem('longitude') !== null
    ) {
      navigate('/result');
    }
  });

  return (
    <div className="mx-auto mt-8 flex flex-col justify-center items-center gap-[20px]">
      <span className="text-[13px] font-bold text-[#4095BD]">
        지역을 선택한 후 확인을 눌러보세요!
      </span>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (city !== undefined && district !== undefined) {
            // eslint-disable-next-line array-callback-return
            districtsByCity[0].seoul.map((item) => {
              if (item.cityName === district) {
                sessionStorage.setItem('latitude', String(item.latitude));
                sessionStorage.setItem('longitude', String(item.longitude));
              }
            });
            navigate('/result');
          }
        }}
        className="w-[300px] mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <select
            id="city"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-done focus:shadow-outline"
            value={city}
            onChange={(event) => {
              event.preventDefault();
              const selectCity = event.target.value;
              setCity(selectCity);
              sessionStorage.setItem('city', selectCity);
            }}
          >
            <option value="">시를 선택하세요</option>
            <option value="서울특별시">서울특별시</option>
          </select>
        </div>

        <div className="mb-6">
          <select
            id="district"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-done focus:shadow-outline"
            value={district}
            onChange={(event) => {
              event.preventDefault();
              const selectDistrict = event.target.value;
              setDistrict(selectDistrict);
              sessionStorage.setItem('district', selectDistrict);
            }}
          >
            <option value="">구/시를 선택하세요</option>
            {city &&
              districtsByCity[0].seoul.map((item) => (
                <option key={item.cityName} value={item.cityName}>
                  {item.cityName}
                </option>
              ))}
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#4095BD] hover:opacity-75 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            저장
          </button>
        </div>
      </form>
      <span className="text-[12px] font-bold text-gray-400">
        현재 버전은 서울특별시를 기준으로 개발되었습니다.
      </span>
    </div>
  );
};

export default SelectionLocation;
