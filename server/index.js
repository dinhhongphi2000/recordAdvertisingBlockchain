var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var routers = require('./routers');
global.keystone = require('keystone')
require('dotenv').config()
global.config = require("config");
var mongoose = require('mongoose');
keystone.import("models");
/**
 * keystone config
 */
keystone.init(config.init);
keystone.set('mongoose', mongoose);
keystone.set('app',app);
keystone.set('locals', {
  env: keystone.get('env')
});
/**
 * config database
 */
mongoose.set('server', config.init.mongoose.server)
mongoose.connection.on('error', (err) => { console.log('[mogodb] unable to connect ',err) })
mongoose.connection.on('connect', () => { console.log('[mongodb] connect ' + config.init.mongo) })
mongoose.connection.on('disconnected', () => { console.log('[mongodb] disconnected') });
keystone.initDatabaseConfig();
/**
 * config static file
 */
app.use('/scripts/video.js', express.static(__dirname + '/node_modules/video.js/dist/video.min.js'))
app.use('/scripts/videojs.ads.min.js', express.static(__dirname + '/node_modules/videojs-contrib-ads/dist/videojs.ads.min.js'))
app.use('/styles/video-js.css', express.static(__dirname + '/node_modules/video.js/dist/video-js.min.css'))
app.use('/styles/videojs.ads.css', express.static(__dirname + '/node_modules/videojs-contrib-ads/dist/videojs.ads.css'))

app.use(express.static(__dirname + '/assert/'))
app.use(express.static(__dirname + '/models/'))
// parse application/json
app.use(bodyParser.json())

/**
  * config route
  */
app.use('*', routers.log);
app.use('/api', routers.default());
/**
 * starting server
 */
keystone.openDatabaseConnection(function () {
	app.listen(8080, function (err) {
    if (err) console.log("Cannot starting server");
    else
      console.log('Server is started at http://localhost:8080');
  })
});
