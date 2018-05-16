var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var routers = require('./routers');


/**
 * config static file
 */
app.use('/scripts/video.js',express.static(__dirname + '/node_modules/video.js/dist/video.min.js'))
app.use('/scripts/videojs.ads.min.js', express.static(__dirname + '/node_modules/videojs-contrib-ads/dist/videojs.ads.min.js'))
app.use('/styles/video-js.css',express.static(__dirname + '/node_modules/video.js/dist/video-js.min.css'))
app.use('/styles/videojs.ads.css', express.static(__dirname + '/node_modules/videojs-contrib-ads/dist/videojs.ads.css'))

app.use(express.static(__dirname + '/assert/'))
app.use(express.static(__dirname + '/models/'))
// parse application/json
app.use(bodyParser.json())

/**
  * config route
  */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database1')
	   .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
app.use('/api',routers.default());
/**
 * starting server
 */
app.listen(8080, function(err){
    if(err) console.log("Cannot starting server");
    else
        console.log('Server is started at http://localhost:8080');
})