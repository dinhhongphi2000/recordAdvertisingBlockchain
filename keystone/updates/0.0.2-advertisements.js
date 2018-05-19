
var keystone = require('keystone');
var async = require('async');
var Advertisement = keystone.list('Advertisement');

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

function createAdvertisement (advertisement, done) {

	var newAdvertisements = new Advertisement.model(advertisements);

	newAdvertisements.save(function (err) {
		if (err) {
			console.error('Error adding Advertisement list to the database:');
			console.error(err);
		} else {
			console.log('Added Advertisement list to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(advertisements, createAdvertisement, done);
};