const path = require('path');

module.exports = {
    entry: './src/rating.js',
    mode: 'production',
    output: {
        filename: 'rating.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
