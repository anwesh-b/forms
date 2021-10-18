import axios from 'axios';

import config from '../config';

/**
 * Http Utility as axios wrapper.
 */
const http = axios.create({
    baseURL: config.baseURI,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default http;
