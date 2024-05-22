import { useState, useEffect } from 'react';

interface HospitalPrice {
  name: string;
  price: {
    [roomType: string]: string | { [age: string]: string };
  };
}

const HopsitalButtons = () => {
  const [costInfo, setCostInfo] = useState<string | null>(null);
  const [hospitals, setHospitals] = useState<HospitalPrice[]>([]);

  useEffect(() => {
    fetch('src/data/chatbot/hospitals.json')
      .then((response) => response.json())
      .then((data) => setHospitals(data.hospitals))
      .catch((error) => console.error('Error fetching hospitals:', error));
  }, []);

  const handleButtonClick = (hospitalName: string) => {
    const selectedHospital = hospitals.find(
      (hospital) => hospital.name === hospitalName
    );
    if (selectedHospital) {
      setCostInfo(JSON.stringify(selectedHospital.price));
    } else {
      setCostInfo('가격 정보 없음');
    }
  };

  return (
    <div>
      <div
        className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4 overflow-y-auto"
        style={{ maxHeight: '300px' }}
      >
        <h2 className="text-lg font-semibold mb-2">병원 리스트</h2>
        <div className="flex flex-col mb-4">
          {hospitals.map((hospital) => (
            <button
              key={hospital.name}
              className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2"
              style={{ backgroundColor: '#4095BD' }}
              onClick={() => handleButtonClick(hospital.name)}
              type="button"
            >
              {hospital.name}
            </button>
          ))}
        </div>
      </div>

      {costInfo && (
        <div className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4 mt-10 overflow-y-auto">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {hospitals[0].name} 가격 정보
            </h3>
            <ul>
              {Object.entries(hospitals[0].price).map(([roomType, prices]) => (
                <li key={roomType}>
                  <strong>{roomType}</strong>:
                  {typeof prices === 'string' ? (
                    prices
                  ) : (
                    <ul>
                      {Object.entries(prices).map(([age, price]) => (
                        <li key={age}>
                          {age}: {price}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HopsitalButtons;
