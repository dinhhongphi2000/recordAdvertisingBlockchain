var LoggingModel = keystone.list('Logging').model;

exports.addLogging = function(req,res){
	var a = new LoggingModel(req.body);
	a.userAgent = req.headers['user-agent']
	a.ip = req.ip;
	a.save(function(err,doc){
		if(err) res.status(500).send('insert database error');
		else res.status(200).json(doc);
	})
}