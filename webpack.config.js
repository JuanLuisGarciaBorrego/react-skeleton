var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist', 
        filename: 'app.bundle.js'
    },
  plugins: [new HtmlWebpackPlugin({
      title: 'React project starter',
      template: __dirname + '/src/template-html.ejs'
  })]
}