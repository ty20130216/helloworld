var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3333',//
        'webpack/hot/only-dev-server',//
        './app/index.jsx'
    ],
    module: {
        rules: [{
            test: /date-time\.js$/,
            loaders: ['muiLocal', 'babel-loader']
        }, {
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            loader: "less-loader"
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'file?name=[path][name].[hash].[ext]'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//generate hot update chunks
    ]
};