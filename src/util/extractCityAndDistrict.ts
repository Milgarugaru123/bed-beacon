const extractCityAndDistrict = (address: string): [string, string] => {
  const regex = /(서울특별시) (\S+구)/;
  const matchString = address.match(regex);

  if (matchString) {
    return [matchString[1], matchString[2]];
  }

  // 주소 형식이 맞지 않는 경우 기본 값 반환
  return ['', ''];
};

export default extractCityAndDistrict;
