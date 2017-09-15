const gps = require('./index')
    let ip = '116.22.135.246'
const co = require('co').co
co(function *(){ const re = yield gps.getAddress(ip); console.log(re)})
