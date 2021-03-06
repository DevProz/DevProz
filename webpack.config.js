const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: ['@babel/polyfill', './client/index.js'], // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: './public/bundle.js'
    },
        devtool: 'source-maps',
    watchOptions: {
      ignored: /node_modules/
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }











//tried adding css rule

//     devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader'
//       },
//       // use the style-loader/css-loader combos for anything matching the .css extension
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//         ]
//       }
//     ]
//   }
// };









