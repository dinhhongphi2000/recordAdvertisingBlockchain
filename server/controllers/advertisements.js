const fs = require('fs');
let videofolder = process.env.NODE_PATH.replace('.','').trim() + "assert/video"

var Model = [
	{
		url: '/advertisements/10.mp4'
	},
	{
		url: '/advertisements/11.mp4'
	},
	{
		url: '/advertisements/12.mp4'
	},
	{
		url: '/advertisements/13.mp4'
	},
	{
		url: '/advertisements/14.mp4'
	},
	{
		url: '/advertisements/15.mp4'
	},
	{
		url: '/advertisements/16.mp4'
	},
	{
		url: '/advertisements/17.mp4'
	},
	{
		url: '/advertisements/18.mp4'
	},
	{
		url: '/advertisements/19.mp4'
	},
	{
		url: '/advertisements/20.mp4'
	},
]

exports.randomVideo = function (req, res) {
	let index = Math.floor(Math.random() * Model.length)
	res.json({index : index})
}

exports.getAdvertisement = function (req, res) {
	console.log('request');
	var index = req.params.id;
	var path = videofolder + Model[index].url;
	const stat = fs.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range

	if (range) {
		const parts = range.replace(/bytes=/, "").split("-")
		const start = parseInt(parts[0], 10)
		const end = parts[1]
			? parseInt(parts[1], 10)
			: fileSize - 1
		const chunksize = (end - start) + 1
		const file = fs.createReadStream(path, { start, end })
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/mp4',
		}
		res.writeHead(206, head);
		file.pipe(res);
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'video/mp4',
		}
		res.writeHead(200, head)
		fs.createReadStream(path).pipe(res)
	}
}