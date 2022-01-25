const cron = require('node-cron');
const fs = require('fs');

const deleteErrorLog = cron.schedule(
    '* * 25 * *', () => {
        console.log('--------------------------------');
        fs.unlinkSync(`./log/error.log`);
    }, {
        scheduled: false
    }
);

deleteErrorLog.start();