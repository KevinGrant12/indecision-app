// entry -> output
// output requires absolute path
// node path to concat
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  // loader - allows webpack to customize loaded files => E.g. running them through babel to compile es6 to es5 and jsx to javascript
  module: {
    rules: [{
      loader: 'babel-loader',
      // check if file being loaded ends with '.js'
      test: /\.js$/,
      // avoid running node modules through babel
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      // "use" allows array of loaders
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // source mapping that points original location of errors and actions
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

