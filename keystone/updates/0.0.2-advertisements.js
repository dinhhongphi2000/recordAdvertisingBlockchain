
var keystone = require('keystone');
var async = require('async');
var Advertisement = keystone.list('Advertisement');

var data = [
    {
        name : "quang cáo gà rán jollibee",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/10.mp4",
        state : 'published'
    },
    {
        name : "quang cáo gà rán jollibee",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/11.mp4",
        state : 'published'
    },
    {
        name : "quang cáo nước tăng lực compact",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/12.mp4",
        state : 'published'
    },
    {
        name : "quang cáo tủ lạnh samsung",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/13.mp4",
        state : 'published'
    },
    {
        name : "quang cáo nước 7up",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/14.mp4",
        state : 'published'
    },
    {
        name : "quang cáo lotteria",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/15.mp4",
        state : 'published'
    },
    {
        name : "quang cáo sữa bò vinamilk",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/16.mp4",
        state : 'published'
    },
    {
        name : "quang cáo sữa susu vinamilk",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/17.mp4",
        state : 'published'
    },
    {
        name : "quang cáo sữa susu vinamilk",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/18.mp4",
        state : 'published'
    },
    {
        name : "quang cáo rules of survival",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/19.mp4",
        state : 'published'
    },
    {
        name : "quang cáo nước ép cam",
        description : "quang cao ...",
        duration : 10,
        producer : "cong ty a",
        url : "/video/advertisements/20.mp4",
        state : 'published'
    }
]

function createAdvertisement (advertisement, done) {

	var newAdvertisements = new Advertisement.model(advertisement);

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
	async.forEach(data, createAdvertisement, done);
};