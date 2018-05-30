let logging = require('../contract')

exports.get = (req, res) => {
    logging.get({adsId : req.params.id}, (err, data) => {
        if(err) res.send({error : 'Cannot get duration of log',details : err});
        else {
            res.send({adsId : req.params.id, duration : data});
        }
    })
}