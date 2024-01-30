// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // Define loaders for different file types (e.g., JavaScript, CSS)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
