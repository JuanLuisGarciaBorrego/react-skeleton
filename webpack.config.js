const env = process.env.NODE_ENV

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist', 
        filename: 'app.bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            {
                 test: /\.(jpe?g|png|gif|svg)$/i,
                 use: [ 'file-loader?name=[name].[ext]&outputPath=images/C' ]
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React project starter',
            template: __dirname + '/src/template-html.ejs'
        }),
        new ExtractTextPlugin('style.css')
    ]
}