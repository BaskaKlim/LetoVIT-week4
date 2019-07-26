
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://leto-v-it-week4.firebaseio.com/',
}
);

export default instance