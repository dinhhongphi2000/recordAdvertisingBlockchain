var express = require('express')
var app = express();
var controllers = require('../controllers');

/**
 * Prefix /api
 */
app.get('/films',controllers.films.getFilmInfo)
app.get('/films/:id',controllers.films.getFilm)
app.get('/advertisements/random',controllers.advertisements.randomVideo)
app.get('/advertisements/:id',controllers.advertisements.getAdvertisement)

module.exports = function(){
    return app;
}