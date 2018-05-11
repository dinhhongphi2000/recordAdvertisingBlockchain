const fs = require('fs');

var Model = [
	{
		url: '/video/advertisements/10.mp4'
	},
	{
		url: '/video/advertisements/11.mp4'
	},
	{
		url: '/video/advertisements/12.mp4'
	},
	{
		url: '/video/advertisements/13.mp4'
	},
	{
		url: '/video/advertisements/14.mp4'
	},
	{
		url: '/video/advertisements/15.mp4'
	},
	{
		url: '/video/advertisements/16.mp4'
	},
	{
		url: '/video/advertisements/17.mp4'
	},
	{
		url: '/video/advertisements/18.mp4'
	},
	{
		url: '/video/advertisements/19.mp4'
	},
	{
		url: '/video/advertisements/20.mp4'
	},
]

exports.randomVideo = function (req, res) {
	let index = Math.floor(Math.random() * Model.length)
	res.json(Model[index])
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