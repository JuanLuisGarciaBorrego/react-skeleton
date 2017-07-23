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