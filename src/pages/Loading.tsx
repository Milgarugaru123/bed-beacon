import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <div className="flex flex-col justify-center items-center">
        <span className=" block text-[13px] font-bold text-[#4095BD]">
          데이터를 가져오는 중이에요.
        </span>
      </div>

      <ClipLoader color="#4095BD" size="35px" />
    </div>
  );
};

export default Loading;
