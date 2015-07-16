
/*
 * GET home page.
 */

var path = require('path');

exports.index = function(req, res){
  console.log(path.join(__dirname, '../'));
  res.sendfile('index.html',{ root: path.join(__dirname, '../') });
};
