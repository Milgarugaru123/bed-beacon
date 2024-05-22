import A1100001 from '../assets/hospitalImage/A1100001.jpeg';
import A1100002 from '../assets/hospitalImage/A1100002.jpeg';
import A1100003 from '../assets/hospitalImage/A1100003.jpeg';
import A1100004 from '../assets/hospitalImage/A1100004.jpeg';
import A1100005 from '../assets/hospitalImage/A1100005.jpeg';
import A1100006 from '../assets/hospitalImage/A1100006.jpeg';
import A1100007 from '../assets/hospitalImage/A1100007.jpeg';
import A1100008 from '../assets/hospitalImage/A1100008.jpeg';
import A1100009 from '../assets/hospitalImage/A1100009.jpeg';
import A1100010 from '../assets/hospitalImage/A1100010.jpeg';
import A1100011 from '../assets/hospitalImage/A1100011.jpeg';
import A1100012 from '../assets/hospitalImage/A1100012.jpeg';
import A1100013 from '../assets/hospitalImage/A1100013.jpeg';
import A1100014 from '../assets/hospitalImage/A1100014.jpeg';
import A1100015 from '../assets/hospitalImage/A1100015.jpeg';
import A1100016 from '../assets/hospitalImage/A1100016.jpeg';
import A1100017 from '../assets/hospitalImage/A1100017.jpeg';
import A1100019 from '../assets/hospitalImage/A1100019.jpeg';
import A1100021 from '../assets/hospitalImage/A1100021.jpeg';

const imageLoader = (hospitalCode: string) => {
  switch (hospitalCode) {
    case 'A1100001':
      return A1100001;
    case 'A1100002':
      return A1100002;
    case 'A1100003':
      return A1100003;
    case 'A1100004':
      return A1100004;
    case 'A1100005':
      return A1100005;
    case 'A1100006':
      return A1100006;
    case 'A1100007':
      return A1100007;
    case 'A1100008':
      return A1100008;
    case 'A1100009':
      return A1100009;
    case 'A1100010':
      return A1100010;
    case 'A1100011':
      return A1100011;
    case 'A1100012':
      return A1100012;
    case 'A1100013':
      return A1100013;
    case 'A1100014':
      return A1100014;
    case 'A1100015':
      return A1100015;
    case 'A1100016':
      return A1100016;
    case 'A1100017':
      return A1100017;
    case 'A1100019':
      return A1100019;
    case 'A1100021':
      return A1100021;
    default:
      return 'image error';
  }
};

export default imageLoader;
