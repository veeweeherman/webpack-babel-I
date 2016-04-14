// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   entry: './main.js',
//   output: { path: __dirname, filename: 'bundle.js' },
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       },
//       // { test: /\.css$/, loader: "style!css" }
//       { test: /\.css$/, loader: 'style-loader!css-loader', },
//       // { test: /\.css$/, loader: 'style-loader!css-loader!./style.css', }
//     ]
//   },
// };



var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader', },
      // { test: /\.css$/,
      //   loader: "style!css"
      // }
    ]
  },
};
