import { HospitalListDataProp } from '../../types/components';

const HospitalNameContainer = ({ name }: { name: string }) => {
  return (
    <div className="w-[180px] flex">
      <span className=" text-[14px] font-[600] ">{name}</span>
    </div>
  );
};

const HospitalRoomContaioner = ({
  emergencyGeneralWard,
  generalWard,
}: {
  emergencyGeneralWard: number;
  generalWard: number;
}) => {
  return (
    <div className="flex flex-col text-[12px] font-normal leading-[150%] text-[#8E9398]">
      <span>응급실일반병상: {emergencyGeneralWard}</span>
      <span>일반입원실: {generalWard}</span>
    </div>
  );
};

const HospitalDistanceContainer = ({ distance }: { distance: number }) => {
  return (
    <div className="flex text-[12px] font-normal leading-[150%] text-[#8E9398] gap-[4px]">
      <span>{distance.toFixed(2)}km</span>
    </div>
  );
};

const HospitalLocationContainer = ({ location }: { location: string }) => {
  return (
    <div className="flex text-[12px] w-[150px] font-normal leading-[150%] text-[#8E9398] gap-[4px]">
      <span>{location}</span>
    </div>
  );
};

const HosptialCallNumberContainer = ({
  callNumber,
}: {
  callNumber: string;
}) => {
  return (
    <button className="text-[12px] text-gray-600 font-semibold " type="button">
      {callNumber}
    </button>
  );
};

const HospitalImageContainer = ({ image }: { image: string }) => {
  return (
    <div className=" bg-slate-400 w-[120px] h-[120px] rounded-[16px] flex justify-center items-center">
      <img
        className=" w-full h-full rounded-[16px]"
        alt="이미지 없음"
        src={image}
      />
    </div>
  );
};

const List = ({
  name,
  emergencyGeneralWard,
  generalWard,
  distance,
  location,
  callNumber,
  image,
}: HospitalListDataProp) => {
  return (
    <article className="cursor-pointer flex justify-between w-[350px] h-[170px] items-center rounded-[16px] border border-[rgba(16, 17, 18, 0.10)] bg-white p-[15px] gap-[19px]">
      <div className="flex flex-col items-start gap-[2px]">
        <HospitalNameContainer name={name} />

        <HospitalRoomContaioner
          emergencyGeneralWard={emergencyGeneralWard as number}
          generalWard={generalWard as number}
        />
        <HospitalLocationContainer location={location} />
        <div className="flex gap-[7px] items-center justify-center">
          <HospitalDistanceContainer distance={distance} />
          <HosptialCallNumberContainer callNumber={callNumber} />
        </div>
      </div>
      <HospitalImageContainer image={image as string} />
    </article>
  );
};

export default List;
