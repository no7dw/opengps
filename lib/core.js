'use strict'

const co = require('co')
const rp = require('request-promise')

exports.getAddress = function (ip) {
    console.log('input ip:', ip)
    let options = {
        method: 'GET',
        uri: 'https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx?',
        // body: {
        //     random: Math.random(),
        //     ip: '' //116.22.135.246
        // },
        json: true // Automatically stringifies the body to JSON 
    };
    options.uri += 'ip=' + ip + '&random=' + Math.random()
    return rp(options)
}
