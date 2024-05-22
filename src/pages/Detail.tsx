import { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from '../util/imageLoader';
import RoomList from '../components/List/RoomList';
import FeasibleList from '../components/List/FeasibleList';
import surgeryName from '../util/surgeryName';
import useGetHospitalDetail from '../hooks/useGetHospitalDetail';
import Loading from './Loading';
import Layout from '../components/Layout/Layout';
import { RoomUnit } from '../types/components';
import { HospitalEmerMedAvailableItem } from '../types/api';

const HospitalRoom = ({
  hospitalRoomData,
}: {
  hospitalRoomData: Array<RoomUnit>;
}) => {
  return (
    <div className=" grid mobile:grid-cols-1 grid-cols-2 flex-col gap-[10px]">
      {hospitalRoomData.map((item) => {
        return (
          <RoomList
            key={item.roomName}
            name={item.roomName}
            availableNumber={item.availableRooms}
          />
        );
      })}
    </div>
  );
};

const MedicalFeasibility = ({
  medicalFeasibilityIndex,
}: {
  medicalFeasibilityIndex: HospitalEmerMedAvailableItem;
}) => {
  const result = Object.keys(medicalFeasibilityIndex)
    .filter((key) => key.startsWith('MKioskTy') && !key.includes('Msg')) // "MKioskTy"로 시작하는 키만 필터링
    .map((key) => ({
      surgeryCode: key,
      feasible: medicalFeasibilityIndex[key].trim() === 'Y',
    }));

  return (
    <div className="grid mobile:grid-cols-1 grid-cols-2 flex-col gap-[10px]">
      {result.map((item) => {
        return (
          <FeasibleList
            key={item.surgeryCode}
            name={surgeryName(item.surgeryCode)}
            feasible={item.feasible}
          />
        );
      })}
    </div>
  );
};

const Detail = () => {
  const params = useParams();

  const [hospitalDataType, setHospitalDataType] = useState<
    'hospitalRoom' | 'medicalFeasibilityIndex'
  >('hospitalRoom');

  const { data, isLoading, error } = useGetHospitalDetail(
    sessionStorage.getItem('latitude') as string,
    sessionStorage.getItem('longitude') as string,
    params.hospitalCode as string
  );

  return (
    <Layout>
      {isLoading && <Loading />}
      {error && <div>에러남</div>}
      {data && (
        <div className="flex flex-col gap-[20px] mobile:mt-[25px]">
          <div className="flex mobile:flex-col mobile:items-center justify-center deskTop:gap-[100px] mobile:gap-[30px]">
            <img
              alt="병원 대표 사진"
              src={imageLoader(data.hospitalCode as string)}
              className=" w-[230px] h-[230px] mobile:w-[250px] mobile:h-[250px] rounded-3xl border-[0.5px] border-[#4095BD]"
            />
            <div className="flex flex-col justify-evenly max-w-[250px]">
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-[5px]">
                  <span className=" text-[20px] w-full font-semibold">
                    {data.hospitalName}
                  </span>
                </div>
                <div>
                  <span className=" text-[15px] font-medium text-gray-400">
                    {data.hospitalDistance?.toFixed(2)}km |{' '}
                    {data.hospitalLocation}
                  </span>
                </div>
              </div>

              <div className="flex mobile:mt-[20px] justify-between items-center">
                <div className="flex flex-col gap-[5px]">
                  <span className=" block text-[16px] font-bold">
                    병상 여석 정보 요약
                  </span>
                  <div className="flex flex-col gap-[5px]">
                    {data?.hospitalRoomData.map((value, idx) => {
                      if (value.availableRooms > 0 && idx < 2) {
                        return (
                          <span
                            key={value.roomName}
                            className=" font-medium text-[13px] block"
                          >
                            {value.roomName} : {value.availableRooms} 병상
                          </span>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <button
                    className="w-[80px] h-[30px] bg-[#4095BD] rounded-xl"
                    type="button"
                  >
                    <a
                      href={`tel:${data.hospitalCallNumber}`}
                      className=" block font-semibold text-[14px] text-white tracking-[-1%]"
                    >
                      전화하기
                    </a>
                  </button>
                  <button
                    className="w-[80px] h-[30px] bg-[#4095BD] rounded-xl"
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      window.open(data.hospitalLink);
                    }}
                  >
                    <span className=" block font-semibold text-[14px] text-white tracking-[-1%]">
                      홈페이지
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full h-[1.25px] bg-transparent" />
          <div className="flex flex-col justify-center gap-[20px]">
            <ul className="flex w-full list-none justify-evenly mobile:flex-col">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setHospitalDataType('hospitalRoom');
                }}
                type="button"
                className={`text-[16px] font-bold ${
                  hospitalDataType === 'hospitalRoom' && 'text-[#4095BD]'
                }`}
              >
                실시간 병상 정보 확인하기
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setHospitalDataType('medicalFeasibilityIndex');
                }}
                type="button"
                className={`text-[16px] font-bold ${
                  hospitalDataType === 'medicalFeasibilityIndex' &&
                  'text-[#4095BD]'
                }`}
              >
                중증질환자 수용가능 여부
              </button>
            </ul>
            <div className=" flex justify-center">
              {hospitalDataType === 'hospitalRoom' && (
                <HospitalRoom
                  hospitalRoomData={data.hospitalRoomData as Array<RoomUnit>}
                />
              )}
              {hospitalDataType === 'medicalFeasibilityIndex' && data && (
                <Suspense>
                  <MedicalFeasibility
                    medicalFeasibilityIndex={data.surgeryList[0]}
                  />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Detail;
