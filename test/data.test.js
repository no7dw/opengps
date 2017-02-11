'use strict'

const gps = require('../index')
const should = require('should');

describe('request ip address', () => {

    it('#1 normal ip request should OK', function * () {
        const ip = '116.22.135.246'
        console.log('ip', ip)
        const ipResult = (yield gps.getAddress(ip)).values[0]
        ipResult.lng.should.be.above(0)
        ipResult.resultCode.should.equal( '定位成功')
    })
    it('#2 no detail ip request should not have detail', function * () {
        const ip = '8.8.8.8'
        const ipResult =( yield gps.getAddress(ip)) .values[0]
        ipResult.lng.should.equal(0)
        ipResult.resultCode.should.equal( '定位失败')
    })
})

