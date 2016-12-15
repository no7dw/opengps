'use strict'
const gps = require('../index')

const reqAccu = "https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx"
const reqNorm = "https://www.opengps.cn/Data/IP/IPSearch.aspx"

const sucResult = {
    "success": true,
    "msg": "",
    "values": [
        {
            "resultCode": "161",
            "ip": "116.22.135.246",
            "service": "",
            "lng": 113.3445796425,
            "lat": 23.089357864749,
            "radius": 7577,
            "confidence": 0.2,
            "address": "广东省广州市海珠区东环路16-18号",
            "loc_Time": "2016 /12/16 00:30:12",
            "remark": ""
        }
    ]
}

const failResult = {
    "success": true,
    "msg": "",
    "values": [
        {
            "resultCode": "167",
            "ip": "8.8.8.8",
            "service": "",
            "lng": 0,
            "lat": 0,
            "radius": 0,
            "confidence": 0,
            "address": "",
            "loc_Time": "2016 /12/15 02:41:23",
            "remark": ""
        }
    ]
}

describe('request ip address', () => {
    it('#1 normal ip request should OK', function * () {
        ip = '116.22.135.246'
        const ipResult = yield gps.getAddress(ip)
        console.log(ipResult)
        ipResult.values[0].should.be.equal(161)
    })
    it('#2 no detail ip request should not have detail', function * () {
        ip = '8.8.8.8'
        const ipResult = yield gps.getAddress(ip)
        console.log(ipResult)
        ipResult.values[0].should.be.equal(167)
    })
})
