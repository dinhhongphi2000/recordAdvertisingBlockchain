let schedule = require('node-schedule');
let LoggingContract = require('../../contract')

let rule = new schedule.RecurrenceRule();

rule.second = 1;

function archivedLog(id) {
    keystone.list('Logging').model
        .update({ _id: id }, { state: 'archived' }, (err, raw) => {
            if (err) console.log('Update Log state archived faild', id);
        })
}

var j = schedule.scheduleJob(rule, () => {
    console.log('begin logging to blockchain')
    keystone.list('Logging').model
        .aggregate()
        .match({ state: 'published' })
        .group({
            _id: { advertisementId: '$advertisementId', ip: '$ip' },
            duration: { $sum: '$duration' },
            element: { $push: '$_id' }
        })
        .exec((err, data) => {
            if(data.length <= 0){
                console.log("don't have log to send to blockchain")
                return;
            }
                
            let adIdArchived = [];
            data.forEach(e => {
                adIdArchived = adIdArchived.concat(e.element);
            })

            data.forEach(e => {
                delete e.element;
            })

            LoggingContract.log(JSON.stringify(data), (err, results) => {
                if (err) console.log('Schedule LoggingContract ERROR', err)
                else {
                    console.log('Schedule LoggingContract SUCCESS')
                    adIdArchived.forEach(id => {
                        archivedLog(id);
                    });
                    console.log('Update log SUCCESS')
                }
            })
        })
})

module.exports = j;