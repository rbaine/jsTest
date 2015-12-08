var fs = require('fs');
const chalk = require('chalk');


// fs.unlink('./test.js', function (err) {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });


console.log(chalk.blue('Hello from node with chalk.'));

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

	console.log(buffer);
	console.log('\n');
	// console.log( buffer[2][0] );


	for (var x=0; x<buffer.length; x++) {
		// console.log(buffer[x][0] + '\t' + buffer[x].length);
		console.log(chalk.blue(buffer[x][0] + '\t' + buffer[x].length));
	}

});



