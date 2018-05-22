	
var advertisementModel = keystone.list('Advertisement').model;

exports.randomVideo = function (req, res) {
	advertisementModel.find()
	.then(doc => {
		let index = Math.floor(Math.random() * doc.length);
		res.status(200).json(doc[index]);
	})
	.catch(err => {
		res.status(500).send('error load advertisements from database');
	})
}