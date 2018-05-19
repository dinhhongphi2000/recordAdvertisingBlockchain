
var keystone = require('keystone');
var async = require('async');
var Film = keystone.list('Film');

var data = [
    {
        name : "127 gio sinh tu",
        description : "phim hay lam",
        poster: "/images/c5.jpg",
        url : "/video/films/1.mp4",
        state : 'published'
    },
    {
        name : "bao mau sieu quay",
        description : "good phim",
        poster: "/images/c6.jpg",
        url : "/video/films/2.mp4",
        state : 'published'
    },
    {
        name : "4 nam 2 chang 1 tinh yeu",
        description : "good",
        poster: "/images/c7.jpg",
        url : "/video/films/3.mp4",
        state : 'published'
    },
    {
        name : "Lat mat 1",
        description : "good",
        poster: "/images/c8.jpg",
        url : "/video/films/4.mp4",
        state : 'published'
    },
    {
        name : "Lat mat 2",
        description : "good",
        poster: "/images/c9.jpg",
        url : "/video/films/5.mp4",
        state : 'published'
    }
]

function createFilms (films, done) {

	var newFilms = new Film.model(films);

	newFilms.save(function (err) {
		if (err) {
			console.error('Error adding films list to the database:');
			console.error(err);
		} else {
			console.log('Added films list to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(data, createFilms, done);
};