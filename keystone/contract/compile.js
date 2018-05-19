var solc = require('solc')
var fs = require('fs')
var config = require('config');

var file = fs.readFileSync(config.contract.sourceCode).toString();
// Setting 1 as second paramateractivates the optimiser
var output = solc.compile(file, 1)

fs.writeFileSync(config.compile.output,JSON.stringify(output));