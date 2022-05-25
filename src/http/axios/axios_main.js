import axios from 'axios';

const axiosMain = axios.create({
    baseURL: 'http://api.medyseva.com/',

});
export const BASE_URL = 'http://api.medyseva.com/';

export default axiosMain;
