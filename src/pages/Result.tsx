import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imageLoader from '../util/imageLoader';
import chatbotIcon from '../assets/chatbot/chatbot.png';
import Chatbot from '../components/chatbot/Chatbot';
import useGetHospitalsAround from '../hooks/useGetHospitalsAround';
import Loading from './Loading';
import List from '../components/List/List';
import Layout from '../components/Layout/Layout';

const Result = () => {
  const [location, setLocation] = useState<string | null>();
  const [showChatbot, setShowChatbot] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem('longitude') === null &&
      sessionStorage.getItem('latitude') === null
    ) {
      navigate('/select');
    }
  }, [navigate]);

  useEffect(() => {
    if (
      sessionStorage.getItem('district') !== null &&
      sessionStorage.getItem('city') !== null
    ) {
      setLocation(
        `${sessionStorage.getItem('city') as string} ${sessionStorage.getItem(
          'district'
        )}`
      );
    }
  }, []);

  const { data, isLoading } = useGetHospitalsAround(
    sessionStorage.getItem('latitude') as string,
    sessionStorage.getItem('longitude') as string
  );

  const onClickChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

  return (
    <Layout>
      <div className="desktop:w-[900px] gap-[15px] flex flex-col relative">
        <button
          className="fixed bottom-4 right-4 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"
          onClick={onClickChatbot}
          type="button"
        >
          <img
            src={chatbotIcon}
            alt="Chatbot Icon"
            className="w-full h-full icon-click-animation"
          />
        </button>

        {showChatbot && (
          <div className="fixed bottom-20 right-4 bg-white w-64 h-15 border border-gray-300 rounded-md shadow-md p-4">
            <Chatbot />
          </div>
        )}
      </div>
      <div className="desktop:w-[900px] gap-[15px] flex flex-col">
        <div className=" w-full flex justify-center items-center gap-[3px]">
          {data && (
            <>
              <span className="text-[12px] font-bold text-[#4095BD]">
                {location || data.getLocation}
              </span>
              <span className="text-[12px] font-normal text-gray-500">
                주변의 대학병원을 알려드릴게요.
              </span>
            </>
          )}
        </div>
        {isLoading && <Loading />}
        {data && (
          <div className="grid place-items-center mobile:flex mobile:flex-col deskTop:grid deskTop:grid-cols-2 justify-center items-center gap-[20px]">
            {data.hospitalAruondResponse.data.result.hospitalList.map(
              (item) => (
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
              )
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Result;
