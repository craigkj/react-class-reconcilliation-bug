const path = require('path');

module.exports = {
    entry: ['./src/client.js'],
    mode: 'production',
    output: {
        path: __dirname + path.join('/public/'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react'],
                    }
                }
            }
        ]
    }
};
