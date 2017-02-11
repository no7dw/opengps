'use strict'

const gps = require('../index')
const should = require('should');
const reqAccu = "https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx"
const reqNorm = "https://www.opengps.cn/Data/IP/IPSearch.aspx"
const co = require('co').co

describe('request ip address', () => {
    it('#1 normal ip request should OK', function * (done) {
        const ip = '116.22.135.246'
        console.log('ip', ip)
        const ipResult = yield gps.getAddress(ip)
        console.log(ipResult)
        ipResult.values[0].should.be.equal(161)
        done()
    })
    it('#2 no detail ip request should not have detail', function * (done) {
        const ip = '8.8.8.8'
        const ipResult = yield gps.getAddress(ip) 
        console.log(ipResult)
        ipResult.values[0].should.be.equal(167)
        done()
    })
})

// co(function*() {
//     const re = yield this.getAddress('116.22.135.245');
//     console.log('result:',re)    
// }).then(function (value) {
//     console.log(value);
// }, function (err) {
//     console.error(err.stack);
// });

