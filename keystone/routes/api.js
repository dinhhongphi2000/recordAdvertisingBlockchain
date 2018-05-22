var express = require('express');
var router = new express.Router();
var controllers = require('../controllers')
router.get('/films', controllers.films.getAllFilms)
router.get('/films/:id', controllers.films.getFilmById)
router.get('/advertisements/random', controllers.advertisements.randomVideo)
router.post('/loggings/addLogging', controllers.loggings.addLogging)
router.get('/hello', function (req, res) {
    res.send('Hello');
})

module.exports = router;