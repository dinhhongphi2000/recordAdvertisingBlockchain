var filmModel = keystone.list('Film').model;

exports.getFilmById = function(req,res){
	var flag = 0;
	filmModel.findById(req.params.id)
	.then(doc => {
		res.status(200).json(doc)
	})
	.catch(err => {
		res.status(500).send('incorrect Id')
	})
}
exports.getAllFilms = function(req,res){
	filmModel.find()
	.then(doc => {
	    res.status(200).json(doc)
	})
	.catch(err => {
	    res.status(500).send('error load films from database')
	})
}