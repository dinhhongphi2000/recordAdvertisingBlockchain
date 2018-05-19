var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database1')
	   .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
var filmsModel = require('../models/film.js');
var loggingModel = require('../models/logging.js');
var advertisementModel = require('../models/advertisement.js');
var films = [
			{
				name : "127 gio sinh tu",
				description : "phim hay lam",
				poster: "/images/c5.jpg",
				url : "/video/films/1.mp4"
			},
			{
				name : "bao mau sieu quay",
				description : "good phim",
				poster: "/images/c6.jpg",
				url : "/video/films/2.mp4"
			},
			{
				name : "4 nam 2 chang 1 tinh yeu",
				description : "good",
				poster: "/images/c7.jpg",
				url : "/video/films/3.mp4"
			},
			{
				name : "Lat mat 1",
				description : "good",
				poster: "/images/c8.jpg",
				url : "/video/films/4.mp4"
			},
			{
				name : "Lat mat 2",
				description : "good",
				poster: "/images/c9.jpg",
				url : "/video/films/5.mp4"
			}
		]
filmsModel.collection.insert(films, function(err,doc){
	if(err) console.error('insert films error')
	else	console.log('insert films successful')
})
var loggings = [
	{
	  agent: "chrome",
	  ip: "192.168.1.34",
	  duration: 4,
	  time: "3-5-2018",
	  advertisementId: "4129b4ddd2781d08c09890f4"
	},
	{
	  agent: "cococ",
	  ip: "192.168.1.35",
	  duration: 9,
	  time: "2-6-2018",
	  advertisementId: "6029b4ddd2781d08c09890f4"
	}
]
loggingModel.collection.insert(loggings, function(err,doc){
	if(err) console.error('insert loggings error')
	else	console.log('insert loggings successful')
})
var advertisements = [
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/10.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/11.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/12.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/13.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/14.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/15.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/16.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/17.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/18.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/19.mp4"
		},
		{
			description : "quang cao ...",
			duration : 10,
			producer : "cong ty a",
			url : "/video/advertisements/20.mp4"
		}
	]
advertisementModel.collection.insert(advertisements, function(err,doc){
	if(err) console.error('insert advertisements error')
	else	console.log('insert advertisements successful')
})