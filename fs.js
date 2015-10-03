var fs = require('fs');

fs.unlink('./test.js', function (err) {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});