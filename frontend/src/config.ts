/**
 * Application wide configuration.
 */
const config = {
    env: process.env.NODE_ENV,
    basename: process.env.REACT_APP_BASE_NAME || '/',
    baseURI: process.env.REACT_APP_API_BASE_URI,
    routes: {
        form: 'form/',
    }
};

export default config;
