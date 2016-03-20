var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 300
  },
  stats: { colors: true }
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening at localhost:8080');
  }
});