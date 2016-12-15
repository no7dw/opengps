'use strict'

const rp = require('request-promise')

var options = {
    method: 'POST',
    uri: 'https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx',
    body: {
        ip: '116.22.135.246'
    },
    json: true // Automatically stringifies the body to JSON 
};
 
exports.getAddress = function (ip) {
    options.body.ip = ip
    console.log('ip:', ip)
    rp(options)
        .then(function (parsedBody) {
            console.log(parsedBody)
            // POST succeeded... 
        })
        .catch(function (err) {
            console.log('failed', err)
            // POST failed... 
        })
    }

