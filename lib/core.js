'use strict'

const co = require('co')
const rp = require('request-promise')

exports.getAddress = function (ip) {
    console.log('input ip:', ip)
    //todo timeout
    //Caution: limit request counter and timeout
    let options = {
        method: 'GET',
        uri: 'https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx?',
        // body: { //if post
        //     random: Math.random(),
        //     ip: '' //116.22.135.246
        // },
        json: true // Automatically stringifies the body to JSON 
    };
    let optionsBackup = {
        method: 'POST',
        uri: 'https://www.opengps.cn/Data/IP/ipplus.aspx',
        json: true,
        body: {
            ip: '116.22.135.246',
            r: Math.random(),
            coord: 'bd09ll',
            vcode: 17 
        }
    }
    options.uri += 'ip=' + ip + '&random=' + Math.random()
    return rp(options)
}
