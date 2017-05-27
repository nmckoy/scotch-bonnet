var path = require('path');

module.exports = {
  entry: {
    javascript: ['./client/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/scripts')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query:
        {
          presets:['babel-preset-es2015', 'babel-preset-react']
        }
      }
    ]
  }
};