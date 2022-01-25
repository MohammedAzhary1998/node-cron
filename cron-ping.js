const cron = require('node-cron');

const exp1 = '* * * * * *'; // Running Every Seconds
const exp2 = '*/2 * * * * *'; // Running Every Two Seconds
const exp3 = '* * * * *'; // Running Every Minutes
const exp4 = '*/2 * * * *'; // Running Every Two Minutes
const exp5 = '1-5 * * * *'; // Running Every Minute To 1 From 5
const exp6 = '1,2,4,5 * * * *'; // Running Every Minute 1, 2, 4 and 5
const exp7 = '* * * January,September Sunday' || '* * * Jan,Sep Sun'; // Running On running on Sundays of January and September
const exp8 = '1,2,4,5 * * * *'; // Running Every Minute 1, 2, 4 and 5


const task = cron.schedule('30-50 * * * *',
    () => console.log('Your Task'), { scheduled: false });

task.start();