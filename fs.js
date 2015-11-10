var fs = require('fs');

// fs.unlink('./test.js', function (err) {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });

var buffer = [];

fs.readFile('./edi.x12', 'utf8', function (err, data) {
  if (err) {
  	console.log(err);
  	throw err;
  }

    // `buffer = data;
	// console.log('inside: \n' + buffer);

	var line = data.split('~');


	for (var x=0; x<line.length; x++) {
		// console.log(x + '\t' + line[x]);

		var fld = line[x].split('*');

		buffer.push(fld);
		for (var y=0; y<fld.length; y++) {
			// console.log('\t' + y + '\t' + fld[y]);
		}
	}

	// console.log(buffer);
	console.log( buffer[2][0] );
});



