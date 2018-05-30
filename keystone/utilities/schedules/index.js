let schedule = require('node-schedule');
let LoggingContract = require('../../contract')

let rule = new schedule.RecurrenceRule();

rule.second = 1;

function archivedLog(id) {
    keystone.list('Logging').model
        .update({ _id: id }, { state: 'archived' }, (err, raw) => {
            if (err) console.log(`Update Log state archived for log id ${id} faild`);
        })
}

var j = schedule.scheduleJob(rule, () => {
    console.log('begin logging to blockchain')
    keystone.list('Logging').model
        .aggregate()
        .match({ state: 'published' })
        .group({
            _id: '$advertisementId',
            duration: { $sum: '$duration' },
            element: { $push: '$_id' }
        })
        .exec((err, data) => {
            if (data.length <= 0) {
                console.log("Schedule don't have log to send to blockchain")
                return;
            }
            data.forEach((element, index) => {
                LoggingContract.log({ adsId: `${element._id}`, duration : element.duration }, (err, results) => {
                    if (err) console.log(`Schedule LoggingContract for adsId ${element._id} ERROR`, err)
                    else {
                        console.log(`Schedule LoggingContract for adsId ${element._id} SUCCESS`)
                        element.element.forEach(id => {
                            archivedLog(id);
                        });
                    }
                })
            })

        })
})

module.exports = j;