import axios from 'axios';

const bedBeaconClient = axios.create({
  baseURL: '/api',
});

export default bedBeaconClient;
