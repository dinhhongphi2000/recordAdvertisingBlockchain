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