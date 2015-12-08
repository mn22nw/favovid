var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }) ,
    new CopyWebpackPlugin([
            
            // {output}/path/to/build/directory/file.txt 
            { from: 'index.html' },

            { from: 'favicon.ico' }
            // Copy directory contents to {output}/path/to/build/directory/ 
           // { from: 'path/to/directory', to: 'path/to/build/directory' },
    
            ])
        
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    } ,

    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000&name=[path][name].[ext]?[hash]' },

    {
      test: /\.json$/,
      loader: "json-loader" 
      }

    ] ,

  }
};
