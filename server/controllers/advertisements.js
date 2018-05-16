const fs = require('fs');
var advertisementsModel = require('../models/advertisement.js');
exports.randomVideo = function (req, res) {
	advertisementsModel.find()
	.then(doc => {
		let index = Math.floor(Math.random() * doc.length);
		res.status(200).json(doc[index]);
	})
	.catch(err => {
		res.status(500).send('error load advertisements from database');
	})
}

// exports.getAdvertisement = function (req, res) {

// 	var index = req.params.id;
// 	var path = videofolder + Model[index].url;
// 	const stat = fs.statSync(path)
// 	const fileSize = stat.size

// 	let seek = 0;
// 	res.writeHead(200, {
// 		'Content-Type': 'video/mp4',
// 		'Transfer-Encoding': 'chunked'
// 	})
// 	let readble = fs.createReadStream(path, {highWaterMark : 200});
// 	let x = 0;
// 	readble.on('data', (chunk) => {

// 		console.log(new Date() + "	" + chunk.length)
// 		res.write(chunk)
// 	})

// 	readble.on('end',() => {
// 		res.end()
// 	})
// }