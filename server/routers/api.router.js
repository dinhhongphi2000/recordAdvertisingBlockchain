var express = require('express')
var app = express();
var controllers = require('../controllers');

/**
 * Prefix /api
 */
app.get('/films',controllers.films.getAllFilms)
app.get('/films/:id',controllers.films.getFilmById)
app.get('/advertisements/random',controllers.advertisements.randomVideo)
app.post('/loggings/addLogging',controllers.loggings.addLogging)
module.exports = function(){
    return app;
}