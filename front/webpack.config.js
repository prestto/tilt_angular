var path = require('path');

module.exports = {
  //...
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'src'),
    // },
    watch: true,
    compress: true,
    port: 9000,
  },
};