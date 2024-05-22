import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import xIcon from '../../assets/icons/ic_x_line.svg';

const SideBar = ({
  onClickMenu,
  setOnClickMenu,
}: {
  onClickMenu: boolean;
  setOnClickMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isAnimate, setIsAnimate] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className={`absolute mobile:h-[200px] h-[250px] w-full bg-white top-0 flex justify-center items-center ${
        // eslint-disable-next-line no-nested-ternary
        onClickMenu && !isAnimate
          ? 'animate-slideDown'
          : isAnimate
          ? 'animate-slideUp'
          : ''
      }`}
    >
      <div className="flex relative w-full h-full justify-center items-center">
        <button
          onClick={() => {
            setIsAnimate(!isAnimate);
            setTimeout(() => {
              setOnClickMenu(!onClickMenu);
              setIsAnimate(!isAnimate);
            }, 750);
          }}
          type="button"
          className=" absolute top-6 right-6"
        >
          <img alt="xicon" src={xIcon} />
        </button>
        <div className="flex flex-col gap-[40px]">
          <button
            type="button"
            className=" text-[18px] font-bold text-[#4095BD]"
            onClick={(e) => {
              e.preventDefault();
              navigate('/hospitals');
            }}
          >
            전체 병원 보기
          </button>
          <button
            type="button"
            className="text-[18px] font-bold text-[#4095BD]"
            onClick={(e) => {
              e.preventDefault();
              navigate('/setting');
            }}
          >
            설정
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
