import { useState, ChangeEvent } from 'react';
import HospitalButtons from './HospitalButtons';
import loadingIcon from '../../assets/chatbot/chatbot.png';

const Chatbot = () => {
  const [message, setMessage] = useState<string>('');
  const [showButtons, setShowButtons] = useState<boolean>(true);
  const [userComment1, setUserComment1] = useState<boolean>(false);
  const [userComment2, setUserComment2] = useState<boolean>(false);
  const [showHospitalList, setShowHospitalList] = useState<boolean>(false);
  const [showURL, setShowURL] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleButtonClick = (buttonText: string) => {
    if (buttonText === 'Button 1') {
      setUserComment1(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowURL(true);
      }, 2000);
    } else if (buttonText === 'Button 2') {
      setUserComment2(true);
      setLoading(true);
      setShowButtons(false);
      setTimeout(() => {
        setLoading(false);
        setShowHospitalList(true);
      }, 2000);
    }
  };

  const handleSend = () => {
    console.log(`Sending message: ${message}`);
    setMessage('');
  };

  return (
    <div className="fixed bottom-20 right-4 bg-white w-[400px] mobile:w-[340px] h-[600px] mobile:h-[400px] border border-gray-300 rounded-3xl shadow-md p-4 overflow-y-auto space-y-8">
      {showButtons && (
        <div>
          <div
            className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <div className="mb-4 text-left">
              <p className="text-lg font-semibold">어떤 것을 도와드릴까요?</p>
            </div>
            <div className="flex flex-col mb-4">
              <button
                className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2"
                style={{ backgroundColor: '#4095BD' }}
                onClick={() => handleButtonClick('Button 1')}
                type="button"
              >
                건강 정보를 검색하고 싶어
              </button>

              <button
                className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2"
                style={{ backgroundColor: '#0C3046' }}
                onClick={() => handleButtonClick('Button 2')}
                type="button"
              >
                각 병원의 입원실 가격에 대해 알고 싶어
              </button>
            </div>
          </div>
        </div>
      )}

      {userComment1 && (
        <div className="text-white text-left font-semibold text-[12.5px] bg-blue-600 border border-gray-300 rounded-3xl shadow-lg p-4 py-2 ml-44 animate-bounce">
          건강 정보를 검색을 알려줘
        </div>
      )}

      {userComment2 && (
        <div className="text-white text-left font-semibold text-[12.5px] bg-blue-600 border border-gray-300 rounded-3xl shadow-lg px-4 py-2 ml-20 animate-bounce">
          병원의 입원실 가격에 대해 알고 싶어
        </div>
      )}

      {loading && ( // 로딩 상태일 때만 로딩 화면 표시
        <div className="text-white font-semibold text-[13px] bg-neutral-200 border rounded-3xl shadow-lg p-4 py-2 mr-60 flex items-center">
          <span>Loading... </span>
          <img
            src={loadingIcon}
            alt="Loading Icon"
            className="w-5 h-5 animate-spin ml-2"
          />
        </div>
      )}

      {showURL && (
        <>
          <div className="text-white text-left font-semibold text-[13px] bg-sky-400 border border-gray-300 rounded-3xl shadow-lg p-4 py-2 mr-20">
            건강 정보에 대해 검색할 수 있는 사이트를 알려드릴게요!
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="www.naver.com">
              <img
                className="rounded-t-lg"
                src="./src/assets/icons/potal.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a
                href="https://health.kdca.go.kr/healthinfo/openapi/svcNew/healthSearchListApi.do?TOKEN=18f573d88e93"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 f"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}

      {showHospitalList && (
        <>
          <div className="text-white text-left font-semibold text-[13px] bg-sky-400 border border-gray-300 rounded-3xl shadow-lg p-4  py-2 mr-20">
            병원의 입원실 가격에 대해 알고 싶으시군요! 어떤 병원을
            알려드릴까요??
          </div>
          <div>
            <HospitalButtons />
          </div>
        </>
      )}

      <div className="flex mb-4 fixed bottom-8">
        <input
          type="text"
          className="flex-1 w-[250px] mobile:w-[200px] border border-gray-300 rounded px-10 py-2 mr-2"
          placeholder="채팅을 입력하세요..."
          value={message}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          onClick={handleSend}
          type="button"
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
