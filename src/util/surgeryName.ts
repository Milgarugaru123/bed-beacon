const surgeryName = (surgeryCode: string) => {
  switch (surgeryCode) {
    case 'MKioskTy1':
      return '심근경색';
    case 'MKioskTy2':
      return '뇌경색';
    case 'MKioskTy3':
      return '거미막하출혈';
    case 'MKioskTy4':
      return '거미막하출혈 외';
    case 'MKioskTy5':
      return '흉부';
    case 'MKioskTy6':
      return '복부';
    case 'MKioskTy7':
      return '담낭질환';
    case 'MKioskTy8':
      return '담도포함질환';
    case 'MKioskTy9':
      return '비외상';
    case 'MKioskTy10':
      return '영유아';
    case 'MKioskTy11':
      return '성인 위장관';
    case 'MKioskTy12':
      return '영유아 위장관';
    case 'MKioskTy13':
      return '성인 기관지';
    case 'MKioskTy14':
      return '영유아 기관지';
    case 'MKioskTy15':
      return '집중치료';
    case 'MKioskTy16':
      return '분만';
    case 'MKioskTy17':
      return '산과수술';
    case 'MKioskTy18':
      return '부인과수술';
    case 'MKioskTy19':
      return '전문치료';
    case 'MKioskTy20':
      return '수족지접합';
    case 'MKioskTy21':
      return '수족지접합 외';
    case 'MKioskTy22':
      return 'HD';
    case 'MKioskTy23':
      return 'CRRT';
    case 'MKioskTy24':
      return '폐쇄병동입원';
    case 'MKioskTy25':
      return '안과 응급';
    case 'MKioskTy26':
      return '성인';
    case 'MKioskTy27':
      return '영유아';
    case 'MKioskTy28':
      return '응급실';
    default:
      return '잘못된 접근입니다.';
  }
};

export default surgeryName;
