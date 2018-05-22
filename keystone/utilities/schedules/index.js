let schedule = require('node-schedule');
let LoggingContract = require('../../contract')

let rule = new schedule.RecurrenceRule();

rule.hour = 1;

var j = schedule.scheduleJob(rule, () => {
    keystone.list('Logging').model
        .find({ state: 'published' })
        .aggregate()
        .group({
            _id: { advertisementId: '$advertisementId', ip: '$ip' },
            duration: { $sum: '$duration' }
        })
        .exec((err, data) => {
            LoggingContract.log(data, (err, results) => {
                if (err) console.log('[Schedule LoggingContract] ERROR', err)
                else {
                    console.log('[Schedule LoggingContract] SUCCESS', data)
                }
            })
        })
})