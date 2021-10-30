const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');

module.exports = {
    webpack: override(
        addWebpackAlias({
            react: path.resolve(__dirname, './node_modules/react'),
            'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom'),
        })
    ),
};
