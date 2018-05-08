	var model = [
		{
			id : "1",
			name : "127 gio sinh tu",
			description : "phim hay lam",
			poster: "/images/c5.jpg",
			url : "/films/1.mp4"
		},
		{
			id : "2",
			name : "bao mau sieu quay",
			description : "good phim",
			poster: "/images/c6.jpg",
			url : "/video/films/2.mp4"
		},
		{
			id : "3",
			name : "4 nam 2 chang 1 tinh yeu",
			description : "good",
			poster: "/images/c7.jpg",
			url : "/video/films/3.mp4"
		},
		{
			id : "4",
			name : "Lat mat 1",
			description : "good",
			poster: "/images/c8.jpg",
			url : "/video/films/4.mp4"
		},
		{
			id : "5",
			name : "Lat mat 2",
			description : "good",
			poster: "/images/c9.jpg",
			url : "/video/films/5.mp4"
		}
	]
exports.getFilm = function(req,res){
	var flag = 0;
	for(var i = 0; i < model.length; i++)
	{
		if(model[i].id == req.params.id)
		{
			res.json(model[i]);
			flag = 1;
			break;
		}
	}
	if(flag == 0)
	{
		res.send('id khong phu hop')
	}
}
exports.getFilmInfo = function(req,res){
	res.json(model);
}