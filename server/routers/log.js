module.exports = function (req, res, next) {
    if (config.log.api.enable) {
        console.log(JSON.stringify({
            tags : ['api'],
            method : req.method,
            url : req.url,
            code : res.code,
            status : res.status
          }))
    }
    next();
}