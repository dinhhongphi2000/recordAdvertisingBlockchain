var filmsModel = require('../models/film.js');
exports.getFilmById = function(req,res){
	var flag = 0;
	filmsModel.find()
	.then(doc => {
		for(var i = 0; i < doc.length; i++)
		{
			if(doc[i].id == req.params.id)
			{
				res.json(doc[i]);
				flag = 1;
				break;
			}
		}
		if(flag == 0)
		{
			res.status(500).send('incorrect Id')
		}
	})
	.catch(err => {
		res.status(500).send('error load films from database')
	})
}
exports.getAllFilms = function(req,res){
	filmsModel.find()
	.then(doc => {
	    res.status(200).json(doc)
	})
	.catch(err => {
	    res.status(500).send('error load films from database')
	})
}